import { FC, useState } from "react";
import './Browser.scss';
import { IoCaretBack, IoCaretForward, IoSearch } from "react-icons/io5";

type HistoryItem = {
    url: string;
}

export const Browser: FC = () => {
    const [web, setWeb] = useState({
        url: '',
        searchValue: '',
        page: 0,
        history: [] as HistoryItem[]
    });

    const goBack = () => {
        if (web.page > 0) {
            setWeb(prevState => ({
                ...prevState,
                page: prevState.page - 1,
                url: prevState.history[prevState.page - 1].url,
                searchValue: prevState.history[prevState.page - 1].url
            }));
        }
    };

    const goForward = () => {
        if (web.page < web.history.length - 1) {
            setWeb(prevState => ({
                ...prevState,
                page: prevState.page + 1,
                url: prevState.history[prevState.page + 1].url,
                searchValue: prevState.history[prevState.page + 1].url
            }));
        }
    };

    const handleSearch = () => {
        if (web.searchValue === '') return;

        const newHistoryItem = { url: web.searchValue };
        const newHistory = [...web.history.slice(0, web.page + 1), newHistoryItem]; // Update history and trim future entries

        setWeb({
            ...web,
            url: web.searchValue,
            searchValue: '',
            history: newHistory,
            page: newHistory.length - 1 // Set page to the last entry
        });

        console.log(newHistory); // Log the current history (not reversed)
    };

    return (
        <div className="web-browser">
            <div className="header">
                <button onClick={goBack}>
                    <IoCaretBack />
                </button>
                <button onClick={goForward}>
                    <IoCaretForward />
                </button>
                <input
                    value={web.searchValue}
                    onChange={e => setWeb({ ...web, searchValue: e.target.value })}
                    placeholder="Enter URL..."
                />
                <button onClick={handleSearch}>
                    <IoSearch />
                </button>
            </div>
            <div className="web">
                <iframe
                    sandbox="allow-same-origin"
                    src={web.url}
                ></iframe>
            </div>
        </div>
    );
}