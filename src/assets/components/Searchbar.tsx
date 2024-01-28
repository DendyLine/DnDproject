import React, { useState } from 'react';
import Autosuggest, { SuggestionsFetchRequestedParams } from 'react-autosuggest';
import { useNavigate } from 'react-router-dom';

interface Race {
    id: string;
    name: string;
    link: string;
    imgAlt: string;
    type: string;
    char: string;
    size: string;
    speed: string;
    languages: string;
    lifeDur: string;
    ideology: string;
    desc: string;
}

interface SearchbarProps {
    races: Race[];
}

const Searchbar: React.FC<SearchbarProps> = ({ races }) => {
    const [suggestions, setSuggestions] = useState<Race[]>([]);
    const [value, setValue] = useState('');
    const history = useNavigate();

    const getSuggestions = (inputValue: string): Race[] => {
        const inputValueLowerCase = inputValue.toLowerCase();
        return races.filter((race: Race) =>
            race.name.toLowerCase().includes(inputValueLowerCase)
        );
    };

    const getSuggestionValue = (suggestion: Race) => suggestion.name;

    const renderSuggestion = (suggestion: Race) => <div>{suggestion.name}</div>;

    const onSuggestionsFetchRequested = ({ value }: SuggestionsFetchRequestedParams) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onSuggestionSelected = (
        event: React.FormEvent<any>,
        { suggestion }: { suggestion: Race }
    ) => {
        // Переходьте на сторінку при виборі варіанта
        history(`/races/${suggestion.id}`);
    };

    const inputProps = {
        placeholder: 'пошук',
        value,
        onChange: (_: React.FormEvent<any>, { newValue }: { newValue: string }) => setValue(newValue),
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={(value) => onSuggestionsFetchRequested(value)}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={(event, data) => onSuggestionSelected(event, data)}
            getSuggestionValue={(suggestion) => getSuggestionValue(suggestion)}
            renderSuggestion={(suggestion) => renderSuggestion(suggestion)}
            inputProps={inputProps}
            theme={{
                container: 'Searchbar',
                suggestionsContainer: 'react-autosuggest__suggestions-container',
                suggestion: 'react-autosuggest__suggestion',
                suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
            }}
        />
    );
};

export default Searchbar;
