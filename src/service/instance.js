import axios from "axios";
import { BASE_URL } from "./urls";

const axiosClient = axios.create()

axiosClient.defaults.baseURL=BASE_URL
// * artık bu cliet ile birlikte nerede çağırırsak çağıralım
//direk base url olarak ilk göreceği şey BASE_URL olacak.

export default axiosClient