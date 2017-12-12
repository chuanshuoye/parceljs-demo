export default {
  props: ["title"],
  data() {
    return {
      message: "hello world123!"
    };
  },
  render(h) {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
};
