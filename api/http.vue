<script>
import Const from '~~/const/const'

export default {
  async get (path) {
    const res = await fetch(Const.baseUrl + path)
    if (res.ok) {
      const json = await res.json()
      if (json.status === 200) {
        return json.data
      } else {
        throw new Error(json.errors)
      }
    } else {
      throw new Error('Error ' + res.status)
    }
  }
}
</script>
