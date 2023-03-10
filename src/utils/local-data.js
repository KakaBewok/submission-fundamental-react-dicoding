const now = new Date();
const f = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'full',
});

const minOneDay = now.setDate(now.getDate() - 1);
const minTwoDay = now.setDate(now.getDate() - 2);
const minTreeDay = now.setDate(now.getDate() - 3);
const minFourDay = now.setDate(now.getDate() - 4);
const minFiveDay = now.setDate(now.getDate() - 5);
const minSicDay = now.setDate(now.getDate() - 6);

let longDateOne = f.format(minOneDay);
let longDateTwo = f.format(minTwoDay);
let longDateTree = f.format(minTreeDay);
let longDateFour = f.format(minFourDay);
let longDateFive = f.format(minFiveDay);
let longDateSix = f.format(minSicDay);

let notes = [
  {
    id: 'notes-1',
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: `${longDateOne}`,
    archived: false,
  },
  {
    id: 'notes-2',
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: `${longDateTwo}`,
    archived: false,
  },
  {
    id: 'notes-3',
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: `${longDateTree}`,
    archived: false,
  },
  {
    id: 'notes-4',
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: `${longDateFour}`,
    archived: false,
  },
  {
    id: 'notes-5',
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: `${longDateFive}`,
    archived: false,
  },
  {
    id: 'notes-6',
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: `${longDateSix}`,
    archived: false,
  },
];

// CREATE
function addNote({ title, body }) {
  const today = new Date();
  const f = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
  });
  let longDate = f.format(today);

  notes = [
    ...notes,
    {
      id: `notes-${+new Date()}`,
      title: title || '(untitled)',
      body,
      createdAt: `${longDate}`,
      archived: false,
    },
  ];
}
// READ
function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id);
  return foundedNote;
}
// READ ALL
function getAllNotes() {
  return notes;
}
// UPDATE
function editNote({ id, title, body }) {
  const noteToEdit = notes.find((note) => note.id === id);
  noteToEdit.title = title;
  noteToEdit.body = body;

  notes = notes.map((note) => {
    if (note.id === id) {
      return note;
    }
    return note;
  });
}
// DELETE
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}

// TAMPILKAN CATATAN AKTIF
function getActiveNotes() {
  const activeNotes = notes.filter((note) => !note.archived);
  return activeNotes;
}
// TAMPILKAN CATATAN TERARSIP
function getArchivedNotes() {
  const archivedNotes = notes.filter((note) => note.archived);
  return archivedNotes;
}

// FUNGSI MENG-ARSIPKAN CATATAN
function archiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: true };
    }
    return note;
  });
}
// FUNGSI MEMBATALKAN-ARSIP CATATAN
function unarchiveNote(id) {
  notes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: false };
    }

    return note;
  });
}

export {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote,
};
