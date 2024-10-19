export const fetchData = (url: string, options?: RequestInit) =>
  fetch(url, options).then(async response => {
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : response;

    if (!response.ok) {
      return Promise.reject({
        ...data,
        status: response.status,
      });
    }

    return data;
  });
