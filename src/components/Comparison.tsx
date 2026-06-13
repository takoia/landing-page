import { content, type Verdict } from "../content";
import { Reveal } from "./ui/Reveal";
import { VerdictMark } from "./ui/Verdict";

export function Comparison() {
  const { comparison } = content;
  const { competitors, legend } = comparison;

  return (
    <section className="section" id="compare">
      <div className="container">
        <Reveal as="p" className="eyebrow">{comparison.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>{comparison.title}</Reveal>

        <Reveal className="compare__wrap" delay={120}>
          <table className="compare">
            <thead>
              <tr>
                <th className="compare__rowhead" scope="col">
                  <span className="compare__legend mono">
                    {legend.yes} ✓ · {legend.partial} ~ · {legend.no} ✕ · {legend.unknown} ?
                  </span>
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.id}
                    scope="col"
                    className={`compare__col ${c.highlight ? "compare__col--takoia" : ""}`}
                  >
                    {c.name}
                    {c.note && <span className="compare__colnote">{c.note}</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr
                  key={row.label}
                  className={[
                    row.emphasize ? "is-emphasized" : "",
                    row.tie ? "is-tie" : "",
                  ].join(" ").trim()}
                >
                  <th scope="row" className="compare__rowhead">
                    <span className="compare__label">{row.label}</span>
                    {row.tie && <span className="compare__tag mono">tie</span>}
                    {row.note && <span className="compare__note">{row.note}</span>}
                  </th>
                  {competitors.map((c) => {
                    const value: Verdict = row.verdicts[c.id] ?? "unknown";
                    return (
                      <td
                        key={c.id}
                        className={`compare__cell ${c.highlight ? "compare__cell--takoia" : ""}`}
                      >
                        <VerdictMark value={value} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal as="p" className="compare__footnote" delay={160}>
          {comparison.footnote}
        </Reveal>
      </div>
    </section>
  );
}
