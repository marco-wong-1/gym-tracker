export interface RepsAndWeights {
  reps: number;
  weight: number;
}

export interface ExerciseFormFields {
  exerciseName: string;
  repsAndWeights: RepsAndWeights[];
}

export interface WorkoutFormFields {
  date: Date;
  workoutName: string;
  exerciseFields: ExerciseFormFields[];
}

export type WorkoutFormFieldsWithIDs = {
  [id: string]: WorkoutFormFields;
};
