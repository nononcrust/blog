---
title: axios 사용성 개선하기
date: 2025-03-14
---

axios는 http 요청을 쉽게 처리할 수 있도록 도와주는 라이브러리입니다. 인터셉터, 타임아웃 등 편리한 기능들을 제공해주기 때문에 많은 프로젝트에서 사용되고 있습니다. axios를 사용해보면 몇가지 불편한 점을 느낄 수 있는데, 아래는 이를 개선해주는 코드입니다.

```ts
const apiClient = axios.create({
  baseUrl: "/api",
});

const api = {
  get: async <TResponse = unknown>(...args: Parameters<AxiosInstance["get"]>) => {
    const response = await apiClient.get<TResponse>(...args);
    return response.data;
  },
  post: async <TResponse = unknown>(...args: Parameters<AxiosInstance["post"]>) => {
    const response = await apiClient.post<TResponse>(...args);
    return response.data;
  },
  put: async <TResponse = unknown>(...args: Parameters<AxiosInstance["put"]>) => {
    const response = await apiClient.put<TResponse>(...args);
    return response.data;
  },
  patch: async <TResponse = unknown>(...args: Parameters<AxiosInstance["patch"]>) => {
    const response = await apiClient.patch<TResponse>(...args);
    return response.data;
  },
  postForm: async <TResponse = unknown>(...args: Parameters<AxiosInstance["postForm"]>) => {
    const response = await apiClient.postForm<TResponse>(...args);
    return response.data;
  },
  patchForm: async <TResponse = unknown>(...args: Parameters<AxiosInstance["patchForm"]>) => {
    const response = await apiClient.patchForm<TResponse>(...args);
    return response.data;
  },
  delete: async <TResponse = unknown>(...args: Parameters<AxiosInstance["delete"]>) => {
    const response = await apiClient.delete<TResponse>(...args);
    return response.data;
  },
};
```

## 무엇을 하는 코드인가요?

- axios의 메소드들이 기본적으로 any를 리턴하는 부분을 unknown으로 개선해줍니다.
- response.data를 참조하는 중복 코드를 완화해줍니다.

```ts
// 개선 전
export const postApi = {
  getPosts: async () => {
    const response = await api.get("/posts");
    return response.data; // Promise<any>
  },
};

// 개선 후
export const postApi = {
  getPosts: () => api.get("/posts"), // Promise<unknown>
};
```
