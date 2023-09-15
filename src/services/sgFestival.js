import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVERL_URL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  // 인터셉터 로직 추가 가능
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // 인터셉터 로직 추가 가능
    return response;
  },
  (error) => {
    // 인터셉터 로직 추가 가능
    return Promise.reject(error);
  }
);

const Service = {
  getLostPost: ({
    color = "",
    type = "",
    keyword = "",
    flag = "",
    page = 1,
    place = "",
  }) => {
    return instance.get(`/posts/lost/`, {
      params: { page, color, type, keyword, place },
    });
  },
  getFoundPost: ({
    color = "",
    type = "",
    keyword = "",
    flag = "",
    page = 1,
    place = "",
  }) =>
    instance.get(`/posts/acquis/`, {
      params: { page, color, type, keyword, place },
    }),
  uploadPost: (formData) => {
    return instance.post(`/posts/`, formData);
  },
  getEachPost: (id) => instance.get(`/posts/${id}`),
  getComments: (id) => instance.get("/comments/", { params: { pk: id } }),
  postComments: ({ id, comment, pwd = 123456145124, parent_comment = "" }) =>
    instance.post("/comments/", {
      post: id,
      content: comment,
      password: pwd,
      parent_comment,
    }),
};

export default Service;
