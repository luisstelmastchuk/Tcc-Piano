const audiopath = `${process.env.AppData}/sounds`

const NOTAS = [
  {
    key: 'C0',
    name: 'C0',
    audio: new Audio(`${audiopath}/C0.mp3`),
    isActived: false,
  },
  {
    key: 'C#0',
    name: 'DF0',
    audio: new Audio(`${audiopath}/DF0.mp3`),
    isActived: false,
  },
  {
    key: 'D0',
    name: 'D0',
    audio: new Audio(`${audiopath}/D0.mp3`),
    isActived: false,
  },
  {
    key: 'D#0',
    name: 'EF0',
    audio: new Audio(`${audiopath}/EF0.mp3`),
    isActived: false,
  },
  {
    key: 'E0',
    name: 'E0',
    audio: new Audio(`${audiopath}/E0.mp3`),
    isActived: false,
  },
  {
    key: 'F0',
    name: 'F0',
    audio: new Audio(`${audiopath}/F0.mp3`),
    isActived: false,
  },
  {
    key: 'F#0',
    name: 'GF0',
    audio: new Audio(`${audiopath}/GF0.mp3`),
    isActived: false,
  },
  {
    key: 'G0',
    name: 'G0',
    audio: new Audio(`${audiopath}/G0.mp3`),
    isActived: false,
  },
  {
    key: 'G#0',
    name: 'AF0',
    audio: new Audio(`${audiopath}/AF0.mp3`),
    isActived: false,
  },
  {
    key: 'A0',
    name: 'A0',
    audio: new Audio(`${audiopath}/A0.mp3`),
    isActived: false,
  },
  {
    key: 'A#0',
    name: 'BF0',
    audio: new Audio(`${audiopath}/BF0.mp3`),
    isActived: false,
  },
  {
    key: 'B0',
    name: 'B0',
    audio: new Audio(`${audiopath}/B0.mp3`),
    isActived: false,
  },
  {
    key: 'C1',
    name: 'C1',
    audio: new Audio(`${audiopath}/C1.mp3`),
    isActived: false,
  },
  {
    key: 'C#1',
    name: 'DF1',
    audio: new Audio(`${audiopath}/DF1.mp3`),
    isActived: false,
  },
  {
    key: 'D1',
    name: 'D1',
    audio: new Audio(`${audiopath}/D1.mp3`),
    isActived: false,
  },
  {
    key: 'D#1',
    name: 'EF1',
    audio: new Audio(`${audiopath}/EF1.mp3`),
    isActived: false,
  },
  {
    key: 'E1',
    name: 'E1',
    audio: new Audio(`${audiopath}/E1.mp3`),
    isActived: false,
  },
  {
    key: 'F1',
    name: 'F1',
    audio: new Audio(`${audiopath}/F1.mp3`),
    isActived: false,
  },
  {
    key: 'F#1',
    name: 'GF1',
    audio: new Audio(`${audiopath}/GF1.mp3`),
    isActived: false,
  },
  {
    key: 'G1',
    name: 'G1',
    audio: new Audio(`${audiopath}/G1.mp3`),
    isActived: false,
  },
  {
    key: 'G#1',
    name: 'AF1',
    audio: new Audio(`${audiopath}/AF1.mp3`),
    isActived: false,
  },
  {
    key: 'A1',
    name: 'A1',
    audio: new Audio(`${audiopath}/A1.mp3`),
    isActived: false,
  },
  {
    key: 'A#1',
    name: 'BF1',
    audio: new Audio(`${audiopath}/BF1.mp3`),
    isActived: false,
  },
  {
    key: 'B1',
    name: 'B1',
    audio: new Audio(`${audiopath}/B1.mp3`),
    isActived: false,
  },
]

const AULAS = [
  [],
  [
    { id: 1, sections: ['C0'] },
    { id: 2, sections: ['DF0'] },
    { id: 3, sections: ['D0'] },
    { id: 4, sections: ['EF0'] },
    { id: 5, sections: ['E0'] },
    { id: 6, sections: ['F0'] },
  ],
  [
    { id: 1, sections: ['G0'] },
    { id: 2, sections: ['G1', 'DF1', 'C1'] },
    { id: 3, sections: ['B1', 'EF1', 'AF1'] },
    { id: 4, sections: ['EF0', 'E1', 'B1'] },
    { id: 5, sections: ['C0', 'E0', 'A0'] },
    { id: 6, sections: ['G0', 'C1', 'GF1'] },
  ],
  [
    { id: 1, sections: ['C1'] },
    { id: 2, sections: ['DF0', 'C1', 'G1'] },
    { id: 3, sections: ['B0', 'EF1', 'AF1'] },
    { id: 4, sections: ['EF0', 'E1', 'B1'] },
    { id: 5, sections: ['C0', 'E0', 'A0'] },
    { id: 6, sections: ['G0', 'C1', 'GF1'] },
  ],
  [
    { id: 1, sections: ['G1'] },
    { id: 2, sections: ['DF0', 'C1', 'G1'] },
    { id: 3, sections: ['B0', 'EF1', 'AF1'] },
    { id: 4, sections: ['EF0', 'E1', 'B1'] },
    { id: 5, sections: ['C0', 'E0', 'A0'] },
    { id: 6, sections: ['G0', 'C1', 'GF1'] },
  ],
]

const PROVAS = [
  [],
  [
    { id: 1, sections: ['C0'] },
    { id: 2, sections: ['DF1'] },
    { id: 3, sections: ['D0'] },
    { id: 4, sections: ['EF0'] },
    { id: 5, sections: ['E0'] },
    { id: 6, sections: ['F0'] },
  ],

  [
    { id: 1, sections: ['G0', 'C1', 'A1'] },
    { id: 2, sections: ['G1', 'DF1', 'C1'] },
    { id: 3, sections: ['B1', 'EF1', 'AF1'] },
    { id: 4, sections: ['EF0', 'E1', 'B1'] },
    { id: 5, sections: ['C0', 'E0', 'A0'] },
    { id: 6, sections: ['G0', 'C1', 'GF1'] },
  ],
  [
    { id: 1, sections: ['C1', 'G0', 'A1'] },
    { id: 2, sections: ['D0', 'C1', 'G1'] },
    { id: 3, sections: ['B0', 'EF1', 'AF1'] },
    { id: 4, sections: ['EF0', 'E1', 'B1'] },
    { id: 5, sections: ['C0', 'E0', 'A0'] },
    { id: 6, sections: ['G0', 'C1', 'GF1'] },
  ],
  [
    { id: 1, sections: ['C0', 'D0', 'E0'] },
    { id: 2, sections: ['D0', 'C1', 'G1'] },
    { id: 3, sections: ['B0', 'EF1', 'AF1'] },
    { id: 4, sections: ['EF0', 'E1', 'B1'] },
    { id: 5, sections: ['C0', 'E0', 'A0'] },
    { id: 6, sections: ['G0', 'C1', 'GF1'] },
  ],
]

const DESAFIO = [
  { id: 1, sections: ['C0'] },
  { id: 2, sections: ['DF0'] },
  { id: 3, sections: ['B0'] },
  { id: 4, sections: ['EF0'] },
  { id: 5, sections: ['C0'] },
  { id: 6, sections: ['G0', 'C1'] },
]

export { NOTAS, AULAS, PROVAS, DESAFIO }
