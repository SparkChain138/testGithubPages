// index.html内で読み込むcssをimport
import "../styles/style.scss";
import "../styles/reset.scss";
import { initializeLeafletMap } from "./leafletMap";

// index.html内で実行するJavaScript
const hello = "hello world";
console.log(hello);
initializeLeafletMap();
