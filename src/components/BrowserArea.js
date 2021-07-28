import useIframeInject from "../hooks/useIframeInject";
import useIframeMessage from "../hooks/useIframeMessage";

export default function BrowserArea({ html, css, javascript }) {
  const messageList = useIframeMessage();
  console.log("message");
  console.log(messageList);
  const injectString = useIframeInject();
  const tmpl = `
    <html>
        <head>
            <style>
                ${css}
            </style>
            <script>
                ${injectString}
            </script>
        </head>

        <body>
            ${html}
        </body>

        <script>
            ${javascript}
        </script>
    </html>
  `;
  if (injectString) {
    return (
      <div className="w-full h-full">
        {messageList.map((m) => (
          <p>{m.type}</p>
        ))}
        <iframe className="w-full h-full" srcDoc={tmpl}></iframe>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full flex justify-center justify-items-center">
        loading...
      </div>
    );
  }
}
