import useIframeInject from "../hooks/useIframeInject";
import useIframeMessage from "../hooks/useIframeMessage";
import VirtualConsole from "./VirtualConsole";

export default function BrowserArea({ html, css, javascript }) {
  const messageList = useIframeMessage();
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
      <div className="w-full h-full flex flex-col">
        <iframe className="w-full h-full flex-1" srcDoc={tmpl}></iframe>
        <VirtualConsole></VirtualConsole>
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
