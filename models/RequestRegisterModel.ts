export default interface RequestRegisterModel {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
  ip: string,
  referer_id: number
}
