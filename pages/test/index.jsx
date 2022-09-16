import React,{useState,useEffect,useRef} from 'react';
import { createWorker } from "tesseract.js";
import preprocessImage from './process';

const Test = () => {
    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [loading,setLoading]=useState(0)
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const worker = createWorker({
      logger: (m) => {
        console.log(m);
      },
    });
    const convertImageToText = async () => {
      if (!imagePath) return;
      await worker.load();
      await worker.loadLanguage("id");
      await worker.initialize("id");
      const {
        data: { text },
      } = await worker.recognize(imagePath);
      setText(text);
    };

    useEffect(() => {
      convertImageToText();
    }, [imagePath]);
   
    const handleChange = (event) => {
      setImagePath(URL.createObjectURL(event.target.files[0]))
    }
   
    const handleClick = () => {

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
   
      ctx.drawImage(imageRef.current, 0, 0);
      ctx.putImageData(preprocessImage(canvas),0,0);
      const dataUrl = canvas.toDataURL("image/jpeg");

        const file = dataUrl;
        if(!file)return;
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageDataUri = reader.result;
          console.log({ imageDataUri });
          setImageData(imageDataUri);
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className="App">
          <main className="App-main">
            <h3>Actual imagePath uploaded</h3>
            <img src={imagePath} className="App-image"  ref={imageRef}  width={"400px"} alt="logo"/>
            <canvas ref={canvasRef} width={700} height={250}></canvas>
              <h3>Extracted text</h3>
            <div className="text-box">
              <p> {text} </p>
            </div>
            <input type="file" onChange={handleChange} />
          </main>
        </div>
      );
};

export default Test;