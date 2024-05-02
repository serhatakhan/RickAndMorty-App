import axiosClient from './instance';

export async function getRequest(url, params) {
  const res = await axiosClient.get(`${url}`, {params: params});
  // dinamik olabileceği için ``kullandık. params'ı dışardan göndereceğimiz params olacak dedik
  // Örneğin, /users?id=123 gibi bir URL'de id=123 kısmı params olarak geçer.
  return res;
}

// payload -> gönderilen veriyi temsil eder
export async function postRequest(url, payload) {
  const res = await axiosClient.post(`${url}`, payload);
  return res;
}
export async function patchRequest(url, payload) {
  const res = await axiosClient.patch(`${url}`, payload);
  return res;
}
export async function deleteRequest(url) {
  const res = await axiosClient.delete(`${url}`);
  return res;
}
