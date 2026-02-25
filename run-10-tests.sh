#!/bin/bash
set -e

SKILL_DIR="/home/ubuntu/.openclaw/workspace/skills/pm-frontend"
PROMPTS_DIR="/home/ubuntu/.openclaw/workspace/agency/test-prompts"
PROJECTS_DIR="/home/ubuntu/.openclaw/workspace/agency/projects"
RESULTS_FILE="/home/ubuntu/.openclaw/workspace/agency/test-results.md"
OAUTH="${CLAUDE_CODE_OAUTH_TOKEN:-}"
if [ -z "$OAUTH" ]; then
  echo "❌ CLAUDE_CODE_OAUTH_TOKEN is not set"
  echo "export CLAUDE_CODE_OAUTH_TOKEN='sk-ant-oat01-...'"
  exit 1
fi

echo "# 10연속 모의 테스트 결과" > "$RESULTS_FILE"
echo "" >> "$RESULTS_FILE"

TESTS=("01-pilates" "02-dental" "03-flower" "04-realestate" "05-nail" "06-law" "07-restaurant" "08-photo" "09-academy" "10-gym")
NAMES=("필라테스" "치과" "꽃집" "부동산" "네일샵" "법률사무소" "한식당" "사진관" "영어학원" "헬스장")

for i in "${!TESTS[@]}"; do
  TEST="${TESTS[$i]}"
  NAME="${NAMES[$i]}"
  PROJECT="test-${TEST}"
  PROMPT_FILE="$PROMPTS_DIR/${TEST}.txt"
  
  echo "=========================================="
  echo "🏁 Test $((i+1))/10: $NAME ($PROJECT)"
  echo "=========================================="
  
  START=$(date +%s)
  
  # Step 1: Init
  echo "📦 초기화..."
  S1=$(date +%s)
  bash "$SKILL_DIR/scripts/init-project.sh" "$PROJECT" 2>&1 | tail -1
  T1=$(($(date +%s) - S1))
  
  # Step 2: Claude Code
  echo "🛠️ 구현..."
  S2=$(date +%s)
  cd "$PROJECTS_DIR/$PROJECT"
  PROMPT=$(cat "$PROMPT_FILE")
  export CLAUDE_CODE_OAUTH_TOKEN="$OAUTH"
  claude -p --permission-mode bypassPermissions "$PROMPT" 2>&1 | tail -5
  T2=$(($(date +%s) - S2))
  
  # Step 3: QA
  echo "🔍 QA..."
  S3=$(date +%s)
  QA_RESULT=$(bash "$SKILL_DIR/scripts/qa-check.sh" "$PROJECTS_DIR/$PROJECT" 2>&1)
  echo "$QA_RESULT" | tail -3
  T3=$(($(date +%s) - S3))
  
  # Step 4: Screenshot
  echo "📸 스크린샷..."
  S4=$(date +%s)
  cd "$PROJECTS_DIR/$PROJECT"
  NODE_PATH=/usr/lib/node_modules node "$SKILL_DIR/scripts/screenshot.js" ./dist ./screenshots 2>&1 || echo "스크린샷 실패"
  T4=$(($(date +%s) - S4))
  
  TOTAL=$(($(date +%s) - START))
  
  # 결과 기록
  QA_SUMMARY=$(echo "$QA_RESULT" | grep "📊 결과" || echo "N/A")
  PASS_STATUS=$(echo "$QA_RESULT" | grep -c "QA 통과" || echo "0")
  
  echo "" >> "$RESULTS_FILE"
  echo "## Test $((i+1)): $NAME" >> "$RESULTS_FILE"
  echo "- 프로젝트: $PROJECT" >> "$RESULTS_FILE"
  echo "- 총 시간: ${TOTAL}초 (init:${T1} | code:${T2} | qa:${T3} | shot:${T4})" >> "$RESULTS_FILE"
  echo "- QA: $QA_SUMMARY" >> "$RESULTS_FILE"
  if [ "$PASS_STATUS" -gt 0 ]; then
    echo "- 상태: ✅ 통과" >> "$RESULTS_FILE"
  else
    echo "- 상태: ❌ 실패" >> "$RESULTS_FILE"
  fi
  
  echo "⏱️ 완료: ${TOTAL}초 (init:${T1}|code:${T2}|qa:${T3}|shot:${T4})"
  echo ""
  
  # 정리 (스크린샷만 보존)
  mkdir -p "$PROJECTS_DIR/screenshots"
  cp "$PROJECTS_DIR/$PROJECT/screenshots/"*.png "$PROJECTS_DIR/screenshots/${TEST}-desktop.png" 2>/dev/null || true
  cp "$PROJECTS_DIR/$PROJECT/screenshots/mobile.png" "$PROJECTS_DIR/screenshots/${TEST}-mobile.png" 2>/dev/null || true
  rm -rf "$PROJECTS_DIR/$PROJECT"
  
done

echo "" >> "$RESULTS_FILE"
echo "---" >> "$RESULTS_FILE"
echo "총 테스트: ${#TESTS[@]}개" >> "$RESULTS_FILE"

echo ""
echo "🏆 전체 완료! 결과: $RESULTS_FILE"
cat "$RESULTS_FILE"
