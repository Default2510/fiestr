import { useState } from "react";

interface WordCountProps {
  contents: string;
}

export const WordCount = (props: WordCountProps) => {
  const c: string = props.contents.trim();
  const count: number = c.length > 0 ? c.split(" ").length : 0;
  return (
    <p>Word Count: {count}</p>
  );
}

interface ColorPickerProps {
  color: string;
  setColor: (value: string) => void;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const colors: Array<string> = ["black", "red", "blue"];

  return (
    <select
      value={props.color}
      onChange={e => props.setColor(e.target.value)}
    >
      {colors.map(c => {
        return <option value={c}>{c}</option>;
      })}
    </select>
  );
}

interface TextAreaProps {
  color: string;
  contents: string;
  setContents: (value: string) => void;
}

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea value={props.contents} onChange={e => props.setContents(e.target.value)} style={{color: props.color}}></textarea>
  );
}

export const WordProcessor = () => {
  const [contents, setContents] = useState<string>('');
  const [color, setColor] = useState<string>('black');

  return (
    <div>
      <h1>Word Processor <i>[Starter]</i></h1>
      <WordCount contents={contents} />
      <ColorPicker color={color} setColor={setColor} />
      <br />
      <TextArea
        color={color}
        contents={contents}
        setContents={setContents}
      />
    </div>
  );
};
