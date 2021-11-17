export default interface RegistrationUserModel {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
  ip: string,
  referer_id: number
}
