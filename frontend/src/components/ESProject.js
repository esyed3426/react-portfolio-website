import { useState, useEffect } from 'react';

export const ESProject = (props) => {
    const [id, setId] = useState(props.id);
    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);
    const [tools, setTools] = useState(props.tools);
    const [summary, setSummary] = useState(props.summary);
    const [note, setNote] = useState(props.note);
    const [link, setLink] = useState(props.note);

    useEffect(() => {
        setId(id);
        setTitle(title);
        setDate(date);
        setTools(tools);
        setSummary(summary);
        setNote(note);
        setLink(link);
        console.log(`mounting ESProject with id=${id}`);
        return () => console.log(`unmounting ESProject with id=${id}`);
    }, [id, title, date, tools, summary, note, link]);

    return (
        <>
            
        </>
    );
};