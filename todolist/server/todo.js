import instance from "./default";

export const AddTodo = async ({ content }) => {
  try {
    await instance.post("/todos", {
      content,
    });
  } catch (error) {
    console.error(error);
  }
};
