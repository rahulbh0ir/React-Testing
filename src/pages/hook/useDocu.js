import { useEffect } from 'react'

const useDocu = (count) => {
  useEffect(() => {
    document.title = `Count - ${count}`
  }, [count])
}

export default useDocu
