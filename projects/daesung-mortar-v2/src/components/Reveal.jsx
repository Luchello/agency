import { useInView } from '../lib/useInView'

export default function Reveal({ as: Comp = 'div', className = '', children }) {
  const { ref, inView } = useInView()

  return (
    <Comp ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()}>
      {children}
    </Comp>
  )
}
