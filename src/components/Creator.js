"use client";
import FormCreator from "../components/FormCreator";

import { json } from "../data/survey_json.js";

export function Creator() {
  return (
    <>
      <FormCreator json={json} />
    </>
  );
}



