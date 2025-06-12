import React from "react";

export default function SOCGrid({
  data,
  labels = { no: "No.", bidang: "Bidang", nama: "Nama", kelas: "Kelas" },
  className = ""
}) {
  return (
    <table
      className={`w-5/6 mx-auto border-collapse font-serif text-sm print:text-xs ${className}`}
    >
      <thead>
        <tr className="border border-grey-300 text-center align-top">
          <th className="border border-grey-300 px-2 py-1 w-12">{labels.no}</th>
          <th className="border border-grey-300 px-2 py-1 w-40">{labels.bidang}</th>
          <th className="border border-grey-300 px-2 py-1">{labels.nama}</th>
          <th className="border border-grey-300 px-2 py-1 w-20">{labels.kelas}</th>
        </tr>
      </thead>

      <tbody>
        {data.map((act, idx) =>
          act.members.map((m, i) => (
            <tr key={`${idx}-${i}`} className="border border-grey-300 align-top">
              {i === 0 && (
                <>
                  <td
                    rowSpan={act.members.length}
                    className="border border-grey-300 px-2 py-1 text-center"
                  >
                    {idx + 1}.
                  </td>
                  <td
                    rowSpan={act.members.length}
                    className="border border-grey-300 px-2 py-1"
                  >
                    {act.bidang}
                  </td>
                </>
              )}

              <td className="border border-grey-300 px-2 py-1">{m.name}</td>
              <td className="border border-grey-300 px-2 py-1 whitespace-nowrap">
                {m.kelas}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
