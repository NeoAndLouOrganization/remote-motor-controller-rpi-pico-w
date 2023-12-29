function fetchPostById(id: string): any {
  try {
    // const response: AxiosResponse<PostResponse, PostResponse> =
    //   await httpRequest.get(`/posts/get-by-id/${id}`);
    // const post = {
    //   date: response.data.data.post.date,
    //   content: getMarkedHTML(response.data.data.post.content),
    // };
    // return post;
  } catch (e) {
    console.log(`Something went wrong: ${e}`);
  }

  return {};
}

export default fetchPostById;
