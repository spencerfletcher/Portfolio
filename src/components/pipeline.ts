// One node of a pipeline diagram.
// "object" is a thing that flows between steps — an input, an intermediate
// artifact, or a final output — rendered as a bare label.
// "stage" is a step that acts on it, rendered as a box.
export type PipelineItem =
	| { type: "object"; label: string }
	| { type: "stage"; label: string; desc: string };
