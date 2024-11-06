export default function SvForm() {
  async function handleSurveySubmit(evt) {
    evt.preventDefault();
    console.log("se envio");

    try {
      const fecha = new Date(evt.target.fecha.value)
        .toISOString()
        .split("T")[0];
      const temp = {
        estudiante: {
          id: evt.target.ide.value,
        },
        trabajador: {
          id: evt.target.idt.value,
        },
        folio: evt.target.folio.value,
        fecha: fecha,
      };
      console.log(temp);
      const r = await fetch("http://127.0.0.1:8080/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      });
      // const j = r.json()
      console.log({ ...r });
    } catch (e) {
      console.log("empleado fetch", e);
    }
  }

  return (
    <div>
      <form id="sv-form" key={"sv-f"} onSubmit={(e) => handleSurveySubmit(e)}>
        <label style={{ display: "block" }}>{"FORMULARIO1"}</label>

        <input type="text" name="ide" placeholder="Id estudiante" />
        <hr />
        <input type="text" name="idt" placeholder="Id trabajador" />
        <hr />
        <input type="number" name="folio" placeholder="folio de formulario" />
        <hr />
        <input type="date" name="fecha" />
        <hr />

        <button type="submit">{"Enviar a Java Spring"}</button>
      </form>
    </div>
  );
}
