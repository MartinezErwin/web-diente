import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      nombre,
      telefono,
      email,
      servicio,
      fecha,
      hora,
      mensaje,
      tipoConsulta,
    } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email es requerido para enviar confirmación" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Cita - Diente a Diente</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
            text-align: center;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 20px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #be185d;
            margin-bottom: 10px;
          }
          .card {
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .section-title {
            color: #be185d;
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 2px solid #fecaca;
            padding-bottom: 5px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            padding: 5px 0;
          }
          .label {
            font-weight: bold;
            color: #374151;
          }
          .value {
            color: #6b7280;
          }
          .important-note {
            background: #fef3cd;
            border: 1px solid #f6cc14;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
          }
          .contact-info {
            background: #f3f4f6;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">🦷 Diente a Diente</div>
          <h1 style="color: #be185d; margin: 0;">¡Solicitud de Cita Recibida!</h1>
          <p style="margin: 10px 0 0 0; color: #6b7280;">Hemos recibido tu solicitud correctamente</p>
        </div>

        <div class="card">
          <h2 class="section-title">👤 Información Personal</h2>
          <div class="info-row">
            <span class="label">Nombre:</span>
            <span class="value">${nombre}</span>
          </div>
          <div class="info-row">
            <span class="label">Teléfono:</span>
            <span class="value">${telefono}</span>
          </div>
          <div class="info-row">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>
        </div>

        <div class="card">
          <h2 class="section-title">🏥 Información de la Consulta</h2>
          <div class="info-row">
            <span class="label">Tipo de consulta:</span>
            <span class="value">${tipoConsulta}</span>
          </div>
          <div class="info-row">
            <span class="label">Servicio solicitado:</span>
            <span class="value">${servicio}</span>
          </div>
          ${
            mensaje
              ? `
          <div style="margin-top: 15px;">
            <span class="label">Mensaje adicional:</span>
            <div style="background: #f9fafb; padding: 10px; border-radius: 5px; margin-top: 5px; color: #6b7280;">
              ${mensaje}
            </div>
          </div>
          `
              : ""
          }
        </div>

        <div class="card">
          <h2 class="section-title">📅 Programación Solicitada</h2>
          ${
            fecha
              ? `
          <div class="info-row">
            <span class="label">Fecha preferida:</span>
            <span class="value">${fecha}</span>
          </div>
          `
              : ""
          }
          ${
            hora
              ? `
          <div class="info-row">
            <span class="label">Hora preferida:</span>
            <span class="value">${hora}</span>
          </div>
          `
              : ""
          }
        </div>

        <div class="important-note">
          <h3 style="margin-top: 0; color: #92400e;">⚠️ Importante</h3>
          <p style="margin-bottom: 0;">
            Esta es una <strong>solicitud de cita</strong>, no una confirmación. 
            Nos pondremos en contacto contigo pronto para confirmar la disponibilidad 
            y finalizar la programación de tu cita.
          </p>
        </div>

        <div class="contact-info">
          <h3 style="margin-top: 0; color: #374151;">📞 Información de Contacto</h3>
          <p><strong>Teléfono:</strong> 4646516461</p>
          <p><strong>Email:</strong> contacto@dienteadiente.com</p>
          <p><strong>Horarios:</strong><br>
          Lun - Vie: 9:00 AM - 6:00 PM<br>
          Sáb: 9:00 AM - 2:00 PM</p>
        </div>

        <div class="footer">
          <p>Gracias por confiar en <strong>Diente a Diente</strong></p>
          <p>Tu salud bucal es nuestra prioridad 🦷✨</p>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Confirmación de Solicitud de Cita - Diente a Diente",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email de confirmación enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el email de confirmación" },
      { status: 500 }
    );
  }
}
