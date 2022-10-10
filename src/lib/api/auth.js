import apiClient from "./apiClient";

const AuthAPI = {
  login: async (code) => {
    const { data } = await apiClient.post(`/user/${code}`);
    return data;
  },
  register: async (client_id, nickname) => {
    const { data } = await apiClient.post(`/user/${client_id}`, {
      nickname,
    });
    return data;
  },
};

export default AuthAPI;
