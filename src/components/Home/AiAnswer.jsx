const AiAnswer = () => {
  const handleAi = async (event) => {
    event.preventDefault();
    const question = event.target.question.value;
    console.log(question);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-medium">Ask RS Tiles Ai</h2>
      <form onSubmit={handleAi}>
        <textarea
          className="textarea"
          placeholder="Ask Any Question"
          name="question"
        ></textarea>
        <button type="submit" className="btn">
          Ask
        </button>
      </form>
    </div>
  );
};

export default AiAnswer;
