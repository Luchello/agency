#!/bin/bash
# 골든 템플릿 기반 모의 외주 테스트
# Usage: bash run-golden-test.sh <project-name> <prompt-file>

set -e

PROJECT_NAME=$1
PROMPT_FILE=$2
TEMPLATE_DIR="/home/ubuntu/.openclaw/workspace/agency/template"
PROJECTS_DIR="/home/ubuntu/.openclaw/workspace/agency/projects"
SCREENSHOT_SCRIPT="/home/ubuntu/.openclaw/workspace/skills/pm-frontend/scripts/screenshot.js"

if [ -z "$PROJECT_NAME" ] || [ -z "$PROMPT_FILE" ]; then
  echo "Usage: bash run-golden-test.sh <project-name> <prompt-file>"
  exit 1
fi

PROJECT_DIR="$PROJECTS_DIR/$PROJECT_NAME"
START_TIME=$(date +%s)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🏭 골든 템플릿 기반 테스트: $PROJECT_NAME"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Step 1: 템플릿 복사
echo "📦 Step 1: 템플릿 복사..."
STEP1_START=$(date +%s)
rm -rf "$PROJECT_DIR"
cp -r "$TEMPLATE_DIR" "$PROJECT_DIR"
# config 기본값 복원
cp "$TEMPLATE_DIR/src/config.default.js" "$PROJECT_DIR/src/config.js" 2>/dev/null || true
STEP1_TIME=$(($(date +%s) - STEP1_START))
echo "  ✅ 복사 완료 (${STEP1_TIME}초)"

# Step 2: Claude Code로 config.js 커스터마이징
echo "🤖 Step 2: Claude Code 커스터마이징..."
STEP2_START=$(date +%s)
if [ -z "${CLAUDE_CODE_OAUTH_TOKEN:-}" ]; then
  echo "❌ CLAUDE_CODE_OAUTH_TOKEN is not set"
  echo "export CLAUDE_CODE_OAUTH_TOKEN='sk-ant-oat01-...'"
  exit 1
fi

PROMPT=$(cat "$PROMPT_FILE")
cd "$PROJECT_DIR"
claude -p --permission-mode bypassPermissions "$PROMPT" 2>&1 | tail -20
STEP2_TIME=$(($(date +%s) - STEP2_START))
echo "  ✅ 커스터마이징 완료 (${STEP2_TIME}초)"

# Step 3: 빌드
echo "🔨 Step 3: 빌드..."
STEP3_START=$(date +%s)
cd "$PROJECT_DIR"
npm run build 2>&1 | tail -5
STEP3_TIME=$(($(date +%s) - STEP3_START))
echo "  ✅ 빌드 완료 (${STEP3_TIME}초)"

# Step 4: 스크린샷
echo "📸 Step 4: 스크린샷..."
STEP4_START=$(date +%s)
NODE_PATH=/usr/lib/node_modules node "$SCREENSHOT_SCRIPT" dist "$PROJECTS_DIR/screenshots" 2>&1
# 파일 이름 변경
mv "$PROJECTS_DIR/screenshots/mobile.png" "$PROJECTS_DIR/screenshots/${PROJECT_NAME}-mobile.png" 2>/dev/null || true
mv "$PROJECTS_DIR/screenshots/desktop.png" "$PROJECTS_DIR/screenshots/${PROJECT_NAME}-desktop.png" 2>/dev/null || true
STEP4_TIME=$(($(date +%s) - STEP4_START))
echo "  ✅ 스크린샷 완료 (${STEP4_TIME}초)"

# 프로젝트 정리 (스크린샷만 남기고 디스크 절약)
rm -rf "$PROJECT_DIR"

TOTAL_TIME=$(($(date +%s) - START_TIME))

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ 완료: $PROJECT_NAME"
echo "  총 시간: ${TOTAL_TIME}초"
echo "  복사: ${STEP1_TIME}초 | 코드: ${STEP2_TIME}초 | 빌드: ${STEP3_TIME}초 | 샷: ${STEP4_TIME}초"
echo "  스크린샷: $PROJECTS_DIR/screenshots/${PROJECT_NAME}-mobile.png"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
