import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Button } from '../Button';

import { Placeholder } from './Placeholder';

/**
 * Предназначен для отображения статусов. Используется внутри [ContentState](/story/components-contentstate--docs).
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=735-12816&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Placeholder> = {
  title: 'Components/Placeholder',
  component: Placeholder,
};

export default meta;

type Story = StoryObj<typeof Placeholder>;

export const Interaction: Story = {
  args: {
    title: 'Заявка успешно отправлена',
    description: 'Вы успешно отправили заявку',
    imgSrc:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjE2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDI0LjZ2MjkuMUgweiIgdHJhbnNmb3JtPSJtYXRyaXgoLS45NDkwMiAtLjMxNTIxIC0uNjg0MzEgLjcyOTE5IDExMS41IDI3LjMpIi8+CiAgPHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTAgMGgzNi43djQ0LjJIMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTQ5MDIgLS4zMTUyMSAtLjY4NDMxIC43MjkxOSA3MCA2NC42KSIvPgogIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0wIDBoMzUuNnY0MS45SDB6IiB0cmFuc2Zvcm09Im1hdHJpeCgtLjk0OTAyIC0uMzE1MjEgLS42ODQzMSAuNzI5MTkgMzIwIDEzMSkiLz4KICA8cGF0aCBmaWxsPSJ1cmwoI2QpIiBkPSJNMCAwaDIwLjR2MjRIMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTQ5MDIgLS4zMTUyMSAtLjY4NDMxIC43MjkxOSAzMTkuOSA3MS40KSIvPgogIDxwYXRoIGZpbGw9InVybCgjZSkiIGQ9Ik0wIDBoMTQwdjc3LjNIMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTQ5MDIgLS4zMTUyMSAtLjY4NDMxIC43MjkxOSAyNjMuNiA5NS40KSIvPgogIDxwYXRoIGZpbGw9IiNERUVBRjciIGQ9Ik0xMTAuMyA4LjggODcgMWMtMy43IDktMjAgMjEuMi0yMCAyMS4yTDkwLjQgMzBhNTQuOSA1NC45IDAgMCAwIDIwLTIxLjJaIi8+CiAgPHBhdGggZmlsbD0iI0Y3RkJGRiIgZD0iTTExMC4zIDcuOCA4NyAwYy0zLjcgOS0yMCAyMS4yLTIwIDIxLjJMOTAuNCAyOWE1NC45IDU0LjkgMCAwIDAgMjAtMjEuMloiLz4KICA8cGF0aCBmaWxsPSIjREVFQUY3IiBkPSJNNjUuMSA0MiAzMC4zIDMwLjRDMjYuMyA0MiAuNyA2MiAuNyA2MmwzNC44IDExLjZDNjAuMyA1Ni41IDY1LjEgNDIgNjUuMSA0MloiLz4KICA8cGF0aCBmaWxsPSIjRjdGQkZGIiBkPSJNNjUuMSA0MSAzMC4zIDI5LjRDMjYuMyA0MSAuNyA2MSAuNyA2MWwzNC44IDExLjZDNjAuMyA1NS41IDY1LjEgNDEgNjUuMSA0MVoiLz4KICA8cGF0aCBmaWxsPSIjREVFQUY3IiBkPSJtMzE5LjggMTAzLjQtMzMuNy0xMS4yYy00LjMgMTEuMi0yOC43IDMwLjYtMjguNyAzMC42TDI5MSAxMzRjMjYuMi0yMCAyOC43LTMwLjYgMjguNy0zMC42WiIvPgogIDxwYXRoIGZpbGw9IiNGN0ZCRkYiIGQ9Im0zMTkuOCAxMDIuNC0zMy43LTExLjJjLTQuMyAxMS4yLTI4LjcgMzAuNi0yOC43IDMwLjZMMjkxIDEzM2MyNi4yLTIwIDI4LjctMzAuNiAyOC43LTMwLjZaIi8+CiAgPHBhdGggZmlsbD0iI0RFRUFGNyIgZD0iTTMxOS4zIDUxLjUgMzAwIDQ1LjFjLTIuNiA2LjQtMTYuNCAxNy41LTE2LjQgMTcuNUwzMDMgNjljMTQuNC0xMCAxNi40LTE3LjUgMTYuNC0xNy41WiIvPgogIDxwYXRoIGZpbGw9IiNGN0ZCRkYiIGQ9Ik0zMTkuMyA1MC41IDMwMCA0NC4xYy0yLjYgNi40LTE2LjQgMTcuNS0xNi40IDE3LjVMMzAzIDY4YzE0LjQtMTAgMTYuNC0xNy41IDE2LjQtMTcuNVoiLz4KICA8cGF0aCBmaWxsPSIjREVFQUY3IiBkPSJNMjU3LjMgNjIuNSAxMzEuMyAyM2MtMTEgMjIuNS01NS43IDU1LjItNTUuNyA1NS4ybDEzMC43IDQzLjVjNDUuNS0zMS43IDUxLTU5LjIgNTEtNTkuMloiLz4KICA8bWFzayBpZD0iZiIgd2lkdGg9IjE4NiIgaGVpZ2h0PSI5OSIgeD0iNzYiIHk9IjIxIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj4KICAgIDxwYXRoIGZpbGw9IiNGOEY5RkYiIGQ9Ik0yNjEgNjEuNWMuNC0uNyAwLTEuNC0uOS0xLjZMMTMyLjcgMjEuNmMtMS0uMy0yLjUgMC0zLjMuOEw3Ni43IDc0LjdjLS45LjgtLjcgMS44LjUgMi4ybDEyNy4yIDQyLjNjLjguMyAyIC4yIDIuOC0uNCA3LjMtNC42IDQyLTI3LjggNTMuOS01Ny4zWiIvPgogIDwvbWFzaz4KICA8ZyBtYXNrPSJ1cmwoI2YpIj4KICAgIDxwYXRoIGZpbGw9InVybCgjZykiIGQ9Ik0yNTYuOCA2MC41IDEzMC44IDIxQzExOS44IDQzLjUgNzUgNzYuMiA3NSA3Ni4ybDEzMC43IDQzLjVjNDUuNS0zMS43IDUxLTU5LjIgNTEtNTkuMloiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzdBQjlGQyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE0My40IDg3czQuMy42IDUuOSAxYzEuNi40IDMuMiAxLjMgNC4yIDEgMS4yLS41IDItMS4xIDIuOC0xLjggMS41LTEuMiAzLjktMSA2LTIuMSAyLjMtMS4yIDQtMiA0LjgtNCAxLTItMS4yLTIuMi0xLjItMi4yLTIuMyAxLTQuMiAzLTQuMiAzbC0zLjkgMy4zcy0zIDIuNi01LjUgMy40Yy0xLjUuNS0yLjkgMS42LTIuOSAxLjZzLTEuNSAxLTEuNCAxLjhjLjMgMS4xIDMtLjggMy41LTEuMS43LS41IDEuMS0xLjIgMS44LTEuNyAwIDAgMTAtMi40IDEwLjYtMi4yLjYuMy0uMyAxLjQtLjggMi0uNi44LTMgMy40LTEuNyAzLjggMSAuNCAxLjktLjQgMi4zLS44IDEtLjkgMi42LTIuNSAzLjktMi42IDMuOCAwIDEuMSAzLjcgMy44IDUuMSAzLjMgMS43IDUuOS0xLjYgOSAuMiAzLjEgMS43LS42IDQuNCAyLjYgNiAyLjcgMS41IDcuNy42IDcuNy42Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDk4OUUzIiBkPSJtMTEyLjIgNzUtMTAuNy0zLjVMOTAuOCA4M2wxMC42IDMuNXoiLz4KICA8L2c+CiAgPHBhdGggc3Ryb2tlPSIjQ0VFNUZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIyNC45IDcxLjQgMTMwLjIgNDBtNjUuMyAzMi44LTU3LjYtMTguNyIvPgogIDxnIGZpbHRlcj0idXJsKCNoKSI+CiAgICA8cGF0aCBmaWxsPSIjN0FCOUZDIiBkPSJtMTIwLjUgNTkuNy01LjggMS42LTMuNi0yLjgtNC4yIDMuMi01LjYtMS0xLjMgMy45LTYgLjkgMS44IDMuNi01IDIuNyA0LjYgMi4zLTIuNSAzLjcgNiAuNC43IDMuOCA1LjgtMS43IDMuNiAyLjkgNC4xLTMuMiA1LjYgMSAxLjQtMy45IDYtMS0xLjgtMy41IDQuOS0yLjctNC41LTIuMyAyLjQtMy43LTYtLjQtLjYtMy44WiIvPgogIDwvZz4KICA8ZyBmaWx0ZXI9InVybCgjaSkiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExNC44IDcxLjhjMi4xLTIuMiAxLjUtNC44LTEuNC01LjhsLTEuMi0uM2E5IDkgMCAwIDAtOSAyLjNjLTIuMSAyLjItMS41IDQuOCAxLjQgNS44bDEuMi4zYzIuOSAxIDcgMCA5LTIuM1oiLz4KICA8L2c+CiAgPGcgZmlsdGVyPSJ1cmwoI2opIj4KICAgIDxwYXRoIGZpbGw9IiMzODg5REQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExNy41IDcyLjdjMy4xLTMuMyAyLjEtNy4yLTIuMi04LjdsLTEuMi0uNGMtNC4zLTEuNC0xMC40LjEtMTMuNiAzLjUtMy4xIDMuMy0yLjEgNy4yIDIuMiA4LjdsMS4yLjRjNC4zIDEuNCAxMC40LS4xIDEzLjYtMy41Wm0tNi00LjZjMS40LjQgMS44IDEuNy43IDIuOS0xIDEtMyAxLjYtNC41IDEuMWwtMS4yLS40Yy0xLjQtLjQtMS44LTEuNy0uNy0yLjkgMS0xIDMtMS42IDQuNS0xLjFsMS4yLjRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzAwNzRDNiIgZD0iTTEwMi41IDg1LjMgOTIgODEuOFY5MGw1LjYtLjcgNS4zIDQuMy0uMy04LjJaIi8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI2LjMiIHgyPSI5LjYiIHkxPSIzMi40IiB5Mj0iLTIuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVGOUZGIi8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRjVGOUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y0RkFGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMTMuNyIgeDI9IjE1LjciIHkxPSI0NS42IiB5Mj0iLS45IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMkY3RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjVGQUZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI4LjQiIHgyPSIxMC40IiB5MT0iNDIuMSIgeTI9Ii0yLjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RjlGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOUZDRkYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjIuNSIgeDI9IjMuMyIgeTE9IjI1LjEiIHkyPSIyLjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YyRjdGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNUZBRkYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9IjQ2LjIiIHgyPSI0OC45IiB5MT0iNzIuMiIgeTI9Ii0xOS4yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNEY5RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRUZGN0ZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJoIiB3aWR0aD0iNDAuMyIgaGVpZ2h0PSIyNi42IiB4PSI4OS45IiB5PSI1OC41IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgIDxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJoYXJkQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KICAgICAgPGZlT2Zmc2V0IGR5PSIxIi8+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249Ii41Ii8+CiAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CiAgICAgIDxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd183NDBfMTM2NDciLz4KICAgICAgPGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93Xzc0MF8xMzY0NyIgcmVzdWx0PSJzaGFwZSIvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIGlkPSJpIiB3aWR0aD0iMTQuNyIgaGVpZ2h0PSIxMSIgeD0iMTAxLjMiIHk9IjY1LjMiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgogICAgICA8ZmVPZmZzZXQgZHg9Ii0uNiIgZHk9IjEuNyIvPgogICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICA8ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzQwXzEzNjQ3Ii8+CiAgICAgIDxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183NDBfMTM2NDciIHJlc3VsdD0ic2hhcGUiLz4KICAgIDwvZmlsdGVyPgogICAgPGZpbHRlciBpZD0iaiIgd2lkdGg9IjIwLjYiIGhlaWdodD0iMTMuNiIgeD0iOTguNyIgeT0iNjMuMSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgogICAgICA8ZmVPZmZzZXQgZHk9IjEiLz4KICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBrMj0iLTEiIGszPSIxIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIvPgogICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICA8ZmVCbGVuZCBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3dfNzQwXzEzNjQ3Ii8+CiAgICA8L2ZpbHRlcj4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC04LjUzMDMgMzQuOTkyNjcgLTgxLjE3ODA4IC0xOS43ODkwOCAxNzAuNSA3MC4xKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9Ii4xIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZCRkRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGN0ZCRkYiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4K',
    imgAlt: 'alt',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <Placeholder
    title="Заявка успешно отправлена"
    description={
      <>
        Вы успешно отправили заявку{' '}
        <Typography color="red" component="span">
          22
        </Typography>
        .
      </>
    }
    imgSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjE2MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDI0LjZ2MjkuMUgweiIgdHJhbnNmb3JtPSJtYXRyaXgoLS45NDkwMiAtLjMxNTIxIC0uNjg0MzEgLjcyOTE5IDExMS41IDI3LjMpIi8+CiAgPHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTAgMGgzNi43djQ0LjJIMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTQ5MDIgLS4zMTUyMSAtLjY4NDMxIC43MjkxOSA3MCA2NC42KSIvPgogIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0wIDBoMzUuNnY0MS45SDB6IiB0cmFuc2Zvcm09Im1hdHJpeCgtLjk0OTAyIC0uMzE1MjEgLS42ODQzMSAuNzI5MTkgMzIwIDEzMSkiLz4KICA8cGF0aCBmaWxsPSJ1cmwoI2QpIiBkPSJNMCAwaDIwLjR2MjRIMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTQ5MDIgLS4zMTUyMSAtLjY4NDMxIC43MjkxOSAzMTkuOSA3MS40KSIvPgogIDxwYXRoIGZpbGw9InVybCgjZSkiIGQ9Ik0wIDBoMTQwdjc3LjNIMHoiIHRyYW5zZm9ybT0ibWF0cml4KC0uOTQ5MDIgLS4zMTUyMSAtLjY4NDMxIC43MjkxOSAyNjMuNiA5NS40KSIvPgogIDxwYXRoIGZpbGw9IiNERUVBRjciIGQ9Ik0xMTAuMyA4LjggODcgMWMtMy43IDktMjAgMjEuMi0yMCAyMS4yTDkwLjQgMzBhNTQuOSA1NC45IDAgMCAwIDIwLTIxLjJaIi8+CiAgPHBhdGggZmlsbD0iI0Y3RkJGRiIgZD0iTTExMC4zIDcuOCA4NyAwYy0zLjcgOS0yMCAyMS4yLTIwIDIxLjJMOTAuNCAyOWE1NC45IDU0LjkgMCAwIDAgMjAtMjEuMloiLz4KICA8cGF0aCBmaWxsPSIjREVFQUY3IiBkPSJNNjUuMSA0MiAzMC4zIDMwLjRDMjYuMyA0MiAuNyA2MiAuNyA2MmwzNC44IDExLjZDNjAuMyA1Ni41IDY1LjEgNDIgNjUuMSA0MloiLz4KICA8cGF0aCBmaWxsPSIjRjdGQkZGIiBkPSJNNjUuMSA0MSAzMC4zIDI5LjRDMjYuMyA0MSAuNyA2MSAuNyA2MWwzNC44IDExLjZDNjAuMyA1NS41IDY1LjEgNDEgNjUuMSA0MVoiLz4KICA8cGF0aCBmaWxsPSIjREVFQUY3IiBkPSJtMzE5LjggMTAzLjQtMzMuNy0xMS4yYy00LjMgMTEuMi0yOC43IDMwLjYtMjguNyAzMC42TDI5MSAxMzRjMjYuMi0yMCAyOC43LTMwLjYgMjguNy0zMC42WiIvPgogIDxwYXRoIGZpbGw9IiNGN0ZCRkYiIGQ9Im0zMTkuOCAxMDIuNC0zMy43LTExLjJjLTQuMyAxMS4yLTI4LjcgMzAuNi0yOC43IDMwLjZMMjkxIDEzM2MyNi4yLTIwIDI4LjctMzAuNiAyOC43LTMwLjZaIi8+CiAgPHBhdGggZmlsbD0iI0RFRUFGNyIgZD0iTTMxOS4zIDUxLjUgMzAwIDQ1LjFjLTIuNiA2LjQtMTYuNCAxNy41LTE2LjQgMTcuNUwzMDMgNjljMTQuNC0xMCAxNi40LTE3LjUgMTYuNC0xNy41WiIvPgogIDxwYXRoIGZpbGw9IiNGN0ZCRkYiIGQ9Ik0zMTkuMyA1MC41IDMwMCA0NC4xYy0yLjYgNi40LTE2LjQgMTcuNS0xNi40IDE3LjVMMzAzIDY4YzE0LjQtMTAgMTYuNC0xNy41IDE2LjQtMTcuNVoiLz4KICA8cGF0aCBmaWxsPSIjREVFQUY3IiBkPSJNMjU3LjMgNjIuNSAxMzEuMyAyM2MtMTEgMjIuNS01NS43IDU1LjItNTUuNyA1NS4ybDEzMC43IDQzLjVjNDUuNS0zMS43IDUxLTU5LjIgNTEtNTkuMloiLz4KICA8bWFzayBpZD0iZiIgd2lkdGg9IjE4NiIgaGVpZ2h0PSI5OSIgeD0iNzYiIHk9IjIxIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIj4KICAgIDxwYXRoIGZpbGw9IiNGOEY5RkYiIGQ9Ik0yNjEgNjEuNWMuNC0uNyAwLTEuNC0uOS0xLjZMMTMyLjcgMjEuNmMtMS0uMy0yLjUgMC0zLjMuOEw3Ni43IDc0LjdjLS45LjgtLjcgMS44LjUgMi4ybDEyNy4yIDQyLjNjLjguMyAyIC4yIDIuOC0uNCA3LjMtNC42IDQyLTI3LjggNTMuOS01Ny4zWiIvPgogIDwvbWFzaz4KICA8ZyBtYXNrPSJ1cmwoI2YpIj4KICAgIDxwYXRoIGZpbGw9InVybCgjZykiIGQ9Ik0yNTYuOCA2MC41IDEzMC44IDIxQzExOS44IDQzLjUgNzUgNzYuMiA3NSA3Ni4ybDEzMC43IDQzLjVjNDUuNS0zMS43IDUxLTU5LjIgNTEtNTkuMloiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzdBQjlGQyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE0My40IDg3czQuMy42IDUuOSAxYzEuNi40IDMuMiAxLjMgNC4yIDEgMS4yLS41IDItMS4xIDIuOC0xLjggMS41LTEuMiAzLjktMSA2LTIuMSAyLjMtMS4yIDQtMiA0LjgtNCAxLTItMS4yLTIuMi0xLjItMi4yLTIuMyAxLTQuMiAzLTQuMiAzbC0zLjkgMy4zcy0zIDIuNi01LjUgMy40Yy0xLjUuNS0yLjkgMS42LTIuOSAxLjZzLTEuNSAxLTEuNCAxLjhjLjMgMS4xIDMtLjggMy41LTEuMS43LS41IDEuMS0xLjIgMS44LTEuNyAwIDAgMTAtMi40IDEwLjYtMi4yLjYuMy0uMyAxLjQtLjggMi0uNi44LTMgMy40LTEuNyAzLjggMSAuNCAxLjktLjQgMi4zLS44IDEtLjkgMi42LTIuNSAzLjktMi42IDMuOCAwIDEuMSAzLjcgMy44IDUuMSAzLjMgMS43IDUuOS0xLjYgOSAuMiAzLjEgMS43LS42IDQuNCAyLjYgNiAyLjcgMS41IDcuNy42IDcuNy42Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDk4OUUzIiBkPSJtMTEyLjIgNzUtMTAuNy0zLjVMOTAuOCA4M2wxMC42IDMuNXoiLz4KICA8L2c+CiAgPHBhdGggc3Ryb2tlPSIjQ0VFNUZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIyNC45IDcxLjQgMTMwLjIgNDBtNjUuMyAzMi44LTU3LjYtMTguNyIvPgogIDxnIGZpbHRlcj0idXJsKCNoKSI+CiAgICA8cGF0aCBmaWxsPSIjN0FCOUZDIiBkPSJtMTIwLjUgNTkuNy01LjggMS42LTMuNi0yLjgtNC4yIDMuMi01LjYtMS0xLjMgMy45LTYgLjkgMS44IDMuNi01IDIuNyA0LjYgMi4zLTIuNSAzLjcgNiAuNC43IDMuOCA1LjgtMS43IDMuNiAyLjkgNC4xLTMuMiA1LjYgMSAxLjQtMy45IDYtMS0xLjgtMy41IDQuOS0yLjctNC41LTIuMyAyLjQtMy43LTYtLjQtLjYtMy44WiIvPgogIDwvZz4KICA8ZyBmaWx0ZXI9InVybCgjaSkiPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExNC44IDcxLjhjMi4xLTIuMiAxLjUtNC44LTEuNC01LjhsLTEuMi0uM2E5IDkgMCAwIDAtOSAyLjNjLTIuMSAyLjItMS41IDQuOCAxLjQgNS44bDEuMi4zYzIuOSAxIDcgMCA5LTIuM1oiLz4KICA8L2c+CiAgPGcgZmlsdGVyPSJ1cmwoI2opIj4KICAgIDxwYXRoIGZpbGw9IiMzODg5REQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExNy41IDcyLjdjMy4xLTMuMyAyLjEtNy4yLTIuMi04LjdsLTEuMi0uNGMtNC4zLTEuNC0xMC40LjEtMTMuNiAzLjUtMy4xIDMuMy0yLjEgNy4yIDIuMiA4LjdsMS4yLjRjNC4zIDEuNCAxMC40LS4xIDEzLjYtMy41Wm0tNi00LjZjMS40LjQgMS44IDEuNy43IDIuOS0xIDEtMyAxLjYtNC41IDEuMWwtMS4yLS40Yy0xLjQtLjQtMS44LTEuNy0uNy0yLjkgMS0xIDMtMS42IDQuNS0xLjFsMS4yLjRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8L2c+CiAgPHBhdGggZmlsbD0iIzAwNzRDNiIgZD0iTTEwMi41IDg1LjMgOTIgODEuOFY5MGw1LjYtLjcgNS4zIDQuMy0uMy04LjJaIi8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI2LjMiIHgyPSI5LjYiIHkxPSIzMi40IiB5Mj0iLTIuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjVGOUZGIi8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRjVGOUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y0RkFGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMTMuNyIgeDI9IjE1LjciIHkxPSI0NS42IiB5Mj0iLS45IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMkY3RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjVGQUZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI4LjQiIHgyPSIxMC40IiB5MT0iNDIuMSIgeTI9Ii0yLjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RjlGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOUZDRkYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjIuNSIgeDI9IjMuMyIgeTE9IjI1LjEiIHkyPSIyLjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YyRjdGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNUZBRkYiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9IjQ2LjIiIHgyPSI0OC45IiB5MT0iNzIuMiIgeTI9Ii0xOS4yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNEY5RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRUZGN0ZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJoIiB3aWR0aD0iNDAuMyIgaGVpZ2h0PSIyNi42IiB4PSI4OS45IiB5PSI1OC41IiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CiAgICAgIDxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJoYXJkQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KICAgICAgPGZlT2Zmc2V0IGR5PSIxIi8+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249Ii41Ii8+CiAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CiAgICAgIDxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd183NDBfMTM2NDciLz4KICAgICAgPGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93Xzc0MF8xMzY0NyIgcmVzdWx0PSJzaGFwZSIvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIGlkPSJpIiB3aWR0aD0iMTQuNyIgaGVpZ2h0PSIxMSIgeD0iMTAxLjMiIHk9IjY1LjMiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgogICAgICA8ZmVPZmZzZXQgZHg9Ii0uNiIgZHk9IjEuNyIvPgogICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICA8ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzQwXzEzNjQ3Ii8+CiAgICAgIDxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183NDBfMTM2NDciIHJlc3VsdD0ic2hhcGUiLz4KICAgIDwvZmlsdGVyPgogICAgPGZpbHRlciBpZD0iaiIgd2lkdGg9IjIwLjYiIGhlaWdodD0iMTMuNiIgeD0iOTguNyIgeT0iNjMuMSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KICAgICAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9ImhhcmRBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgogICAgICA8ZmVPZmZzZXQgZHk9IjEiLz4KICAgICAgPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBrMj0iLTEiIGszPSIxIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIvPgogICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgogICAgICA8ZmVCbGVuZCBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3dfNzQwXzEzNjQ3Ii8+CiAgICA8L2ZpbHRlcj4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC04LjUzMDMgMzQuOTkyNjcgLTgxLjE3ODA4IC0xOS43ODkwOCAxNzAuNSA3MC4xKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9Ii4xIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZCRkRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGN0ZCRkYiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4K"
    imgAlt="альтернативный текст изображения"
    Actions={
      <>
        <Button variant="text">Вернуться</Button>
        <Button>ОК</Button>
      </>
    }
  />
);
