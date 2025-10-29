import { Question } from "modules/medical-screening/QuestionsSection";

export function rearrangeQuestions(questions: Question[]): Question[] {
  const idToIndex = new Map<string, number>();

  // Build a map of ID -> Index for quick lookup
  questions.forEach((q, index) => {
    idToIndex.set(q.id, index);
  });

  // Create a copy of the original array to modify
  const reordered = [...questions];

  // Iterate over the questions and move dependent questions near their referenced question
  for (let i = reordered.length - 1; i >= 0; i--) {
    const question = reordered[i];

    if (question.requiredRef && idToIndex.has(question.requiredRef.id)) {
      const refIndex = idToIndex.get(question.requiredRef.id)!;

      // Remove the question from its current position
      reordered.splice(i, 1);

      // Recalculate the reference index in case the array shifted
      const newRefIndex = reordered.findIndex(
        (q) => q.id === question.requiredRef!.id
      );

      // Insert the dependent question right after its reference question
      reordered.splice(newRefIndex + 1, 0, question);
    }
  }

  return reordered;
}
