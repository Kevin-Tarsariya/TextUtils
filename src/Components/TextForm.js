import React, { useState } from 'react';
import {
  FaCopy, FaTrash, FaFont, FaTextHeight, FaSpaceShuttle, FaMagic, FaUndo,
  FaRegLightbulb, FaSearch, FaExchangeAlt, FaQrcode, FaDownload, FaVolumeUp, FaBroom
} from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleOnChange = (e) => setText(e.target.value);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleExtraSpace = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleCapitalize = () => {
    setText(text.replace(/\b\w/g, char => char.toUpperCase()));
    props.showAlert("Capitalized first letters!", "success");
  };

  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
    props.showAlert("Text reversed!", "success");
  };

  const handleRemovePunctuation = () => {
    setText(text.replace(/[^\w\s]|_/g, ""));
    props.showAlert("Punctuation removed!", "success");
  };

  const handleFind = () => {
    if (text.includes(findText)) {
      props.showAlert(`Found "${findText}" in text!`, "success");
    } else {
      props.showAlert(`"${findText}" not found.`, "warning");
    }
  };

  const handleReplace = () => {
    const newText = text.replaceAll(findText, replaceText);
    setText(newText);
    props.showAlert(`Replaced all "${findText}" with "${replaceText}"`, "success");
  };

  const toggleQR = () => setShowQR(!showQR);

  const handleSpeak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    props.showAlert("Speaking text...", "success");
  };

  const handleStopSpeak = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    props.showAlert("Speech stopped !", "info");
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text-output.txt";
    link.click();
    props.showAlert("Text file downloaded!", "success");
  };

  const handleClearFormatting = () => {
    const cleaned = text.replace(/[\n\r\t]+/g, ' ').replace(/\s+/g, ' ').trim();
    setText(cleaned);
    props.showAlert("Formatting cleared!", "success");
  };

  const getWordFrequency = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const freq = {};
    if (words) {
      words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
      });
    }
    return freq;
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h1 className={`mb-4 text-center display-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>

      {/* Textarea */}
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'light'}`}
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter your text here..."
        />
      </div>

      {/* Action Buttons */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button className="btn btn-primary" onClick={handleUpClick}><FaFont /> Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowClick}><FaTextHeight /> Lowercase</button>
        <button className="btn btn-primary" onClick={handleCapitalize}><FaMagic /> Capitalize</button>
        <button className="btn btn-primary" onClick={handleReverse}><FaUndo /> Reverse</button>
        <button className="btn btn-primary" onClick={handleRemovePunctuation}><FaRegLightbulb /> Remove Symbol</button>
        <button className="btn btn-primary" onClick={handleExtraSpace}><FaSpaceShuttle /> Remove Spaces</button>
        <button className="btn btn-primary" onClick={handleCopy}><FaCopy /> Copy</button>
        <button className="btn btn-danger" onClick={handleClearClick}><FaTrash /> Clear</button>

        {/* Speak / Stop Speak Buttons */}
        {!isSpeaking ? (
          <button className="btn btn-secondary" onClick={handleSpeak}><FaVolumeUp /> Speak</button>
        ) : (
          <button className="btn btn-danger" onClick={handleStopSpeak}><FaVolumeUp /> Stop</button>
        )}

        <button className="btn btn-secondary" onClick={handleDownload}><FaDownload /> Download</button>
        <button className="btn btn-secondary" onClick={handleClearFormatting}><FaBroom /> Clear Formatting</button>
      </div>

      {/* Find and Replace */}
      <div className="mb-4 d-flex flex-wrap gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Find text"
          value={findText}
          onChange={(e) => setFindText(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Replace with"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
        />
        <button className="btn btn-warning" onClick={handleFind}><FaSearch /> Find</button>
        <button className="btn btn-success" onClick={handleReplace}><FaExchangeAlt /> Replace</button>
      </div>

      {/* QR Code Toggle */}
      <button className="btn btn-dark mb-3" onClick={toggleQR}>
        <FaQrcode /> {showQR ? "Hide" : "Show"} QR Code
      </button>

      {showQR && text && (
        <div className="mb-4">
          <QRCodeSVG value={text} />
        </div>
      )}

      {/* Summary */}
      <div className="card mb-4">
        <div className="card-body">
          <h2>Text Summary</h2>
          <p>{wordCount} words, {text.length} characters</p>
          <p>{(0.008 * wordCount).toFixed(2)} minutes to read</p>
        </div>
      </div>

      {/* Word Frequency */}
      <div className="card mb-4">
        <div className="card-body">
          <h2>Word Frequency</h2>
          <ul>
            {Object.entries(getWordFrequency()).map(([word, count], index) => (
              <li key={index}><strong>{word}</strong>: {count}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Preview */}
      <div className="card">
        <div className="card-body">
          <h2>Preview</h2>
          {text ? (
            <p className="preview-text">{text}</p>
          ) : (
            <p className="text-muted">Nothing to preview</p>
          )}
        </div>
      </div>
    </div>
  );
}
