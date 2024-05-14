import React from 'react';
import '../styles/SolicitudStyles.css';

export const SolicitudPage = () => {
  return (

    <div className='alineacionbody'>
      <div className="alineacion">
        <div className="areainput">
          <label htmlFor='areaSolicitante'>Area Solicitante:</label>
          <input
            type='text'
            className='inputs-norm'
            name='areaSolicitante'
            id='areaSolicitante'
            required
            autoComplete='off'
          />
        </div>

        <div className="areainput">
          <label htmlFor='folio'>Folio:</label>
          <input
            className='inputs-norm'
            type='number'
            name='folio'
            id='folio'
            required
            autoComplete='off'
          />
        </div>

        <div className="areainput">
          <label htmlFor='fecha'>Fecha:</label>
          <input
            className='inputs-norm'
            type='text'
            name='fecha'
            id='fecha'
            required
            autoComplete='off'
          />
        </div>
      </div>

      <div className="alineacion">

        <div className="inputs-norm">
          <label htmlFor='tipoSuministro'>Tipo de suministro:</label>
          <select className="form-select" id="tipoSuministro">
            <option value="">Seleccione un suministro</option>
            <option value="normal">Normal</option>
            <option value="urgente">Urgente</option>
          </select>
        </div>

        <div className="inputs-norm">
          <label htmlFor='procesoClave'>Proceso clave:</label>
          <select className="form-select" id="procesoClave">
            <option value="">Seleccione un proceso</option>
            <option value="PC Educatio">PC Educatio</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="inputs-norm">
          <label htmlFor='proyecto'>Proyecto:</label>
          <select className="form-select" id="proyecto">
            <option value="">Seleccione un proyecto</option>
            <option value="PC Educatio">PC Educatio</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div className="alineacion">

        <div className="areainput">

          <div className="inputs-norm">
            <label htmlFor='cantidad'>Cantidad:</label>
            <input
              className='inputs-norm'
              type='text'
              name='cantidad'
              id='cantidad'
              required
              autoComplete='off'
            />
          </div>
        </div>

        <div className="inputs-norm">
          <label htmlFor='unidadMedida'>Unidad de medida:</label>
          <select className="form-select" id="unidadMedida">
            <option value="">Seleccione una unidad</option>
            <option value="kit">Kit</option>
            <option value="paquete">Paquete</option>
            <option value="pieza">Pieza</option>
          </select>
        </div>

        <div className="inputs-norm">
          <label htmlFor='descripcionSolicitado'>Descripcion del bien solicitado:</label>
          <input
            className='inputs-norm'
            type='text'
            name='descripcionSolicitado'
            id='descripcionSolicitado'
            required
            autoComplete='off'
          />
        </div>
      </div>

      <div className="alineacion">

        <div className="inputs-norm">
          <label htmlFor='cantidadEntregada'>Cantidad entregada:</label>
          <input
            className='input-private'
            type='text'
            name='cantidadEntregada'
            id='cantidadEntregada'
            required
            autoComplete='off'
          />
        </div>

        <div className="inputs-norm">
          <label htmlFor='justificacionAdquisicion'>Justificacion para la adquisicion:</label>
          <input
            className='input-private'
            type='text'
            name='justificacionAdquisicion'
            id='justificacionAdquisicion'
            required
            autoComplete='off'
          />
        </div>
      </div>


      <div className='tablafirmas'>
        <table className="table">
       
          <tbody>
            <table class="mi-tabla">
              <tr>
                <td>Solicitud</td>
              </tr>
              <tr className="fila-grande">
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>

          </tbody>
        </table>
        <table className="table">
          <tbody>
            <table class="mi-tabla">
              <tr>
                <td>Revisión</td>
              </tr>
              <tr className="fila-grande">
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>

          </tbody>
        </table>
        <table className="table">
          <tbody>
            <table class="mi-tabla">
              <tr>
                <td>Validación</td>
              </tr>
              <tr className="fila-grande">
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>

          </tbody>
        </table>
        <table className="table">
          
          <tbody>
            <table class="mi-tabla">
              <tr>
                <td>Autorizó</td>
              </tr>
              <tr className="fila-grande">
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>

          </tbody>
        </table>

      </div>
      <button className="btn-primary">Guardar cambios</button>

    </div>
  );
};
