'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const nlNL = {
  name: 'nl-NL',
  global: {
    undo: 'Ongedaan Maken',
    redo: 'Opnieuw Doen',
    confirm: 'Bevestig',
    clear: 'Wis'
  },
  Popconfirm: {
    positiveText: 'Bevestig',
    negativeText: 'Annuleer'
  },
  Cascader: {
    placeholder: 'Selecteer a.u.b.',
    loading: 'Laden',
    loadingRequiredMessage: (label) =>
      `Laad alle afstammelingen van ${label} alvorens het te selecteren.`
  },
  Time: {
    dateFormat: 'dd/MM/yyyy',
    dateTimeFormat: 'dd/MM/yyyy HH:mm:ss'
  },
  DatePicker: {
    yearFormat: 'yyyy',
    monthFormat: 'MMM',
    dayFormat: 'eeeeee',
    yearTypeFormat: 'yyyy',
    monthTypeFormat: 'MM/yyyy',
    dateFormat: 'dd/MM/yyyy',
    dateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
    quarterFormat: 'qqq yyyy',
    clear: 'Wis',
    now: 'Nu',
    confirm: 'Bevestig',
    selectTime: 'Selecteer Uur',
    selectDate: 'Selecteer Datum',
    datePlaceholder: 'Selecteer Datum',
    datetimePlaceholder: 'Selecteer Dag en Uur',
    monthPlaceholder: 'Selecteer Maand',
    yearPlaceholder: 'Selecteer Jaar',
    quarterPlaceholder: 'Selecteer Kwartaal',
    startDatePlaceholder: 'Begindatum',
    endDatePlaceholder: 'Einddatum',
    startDatetimePlaceholder: 'Begindatum en Uur',
    endDatetimePlaceholder: 'Einddatum en Uur',
    startMonthPlaceholder: 'Begin Maand',
    endMonthPlaceholder: 'Eind Maand',
    monthBeforeYear: true,
    firstDayOfWeek: 0,
    today: 'Vandaag'
  },
  DataTable: {
    checkTableAll: 'Selecteer alles in de tabel',
    uncheckTableAll: 'Alles in de tabel deselecteren',
    confirm: 'Bevestig',
    clear: 'Wis'
  },
  LegacyTransfer: {
    sourceTitle: 'Bron',
    targetTitle: 'Doel'
  },
  // TODO: translation
  Transfer: {
    selectAll: 'Select all',
    unselectAll: 'Unselect all',
    clearAll: 'Clear',
    total: (num) => `Total ${num} items`,
    selected: (num) => `${num} items selected`
  },
  Empty: {
    description: 'Geen Data'
  },
  Select: {
    placeholder: 'Selecteer a.u.b.'
  },
  TimePicker: {
    placeholder: 'Selecteer Uur',
    positiveText: 'OK',
    negativeText: 'Annuleer',
    now: 'Nu'
  },
  Pagination: {
    goto: 'Ga naar',
    selectionSuffix: 'pagina'
  },
  DynamicTags: {
    add: 'Toevoegen'
  },
  Log: {
    loading: 'Laden'
  },
  Input: {
    placeholder: 'Invoeren a.u.b.'
  },
  InputNumber: {
    placeholder: 'Invoeren a.u.b.'
  },
  DynamicInput: {
    create: 'Creëer'
  },
  ThemeEditor: {
    title: 'Thema Bewerker',
    clearAllVars: 'Wis Alle Variabelen',
    clearSearch: 'Wis Zoekopdracht',
    filterCompName: 'Filter Componentsnaam',
    filterVarName: 'Filter Variablenaam',
    import: 'Importen',
    export: 'Exporteren',
    restore: 'Reset naar Standaard'
  },
  Image: {
    tipPrevious: 'Vorige afbeelding (←)',
    tipNext: 'Volgende afbeelding (→)',
    tipCounterclockwise: 'Tegen de klok in',
    tipClockwise: 'Met de klok mee',
    tipZoomOut: 'Uitzoomen',
    tipZoomIn: 'Inzoomen',
    tipClose: 'Sluiten (Esc)',
    // TODO: translation
    tipOriginalSize: 'Zoom to original size'
  }
}
exports.default = nlNL
