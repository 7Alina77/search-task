import { useState } from "react";
import "./styles.css";

interface SearchFormProps {
  onSearch: (search: string) => Promise<void>;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [formValue, setFormValue] = useState('');

  const handleChangeSearch = (e: React.FocusEvent<HTMLInputElement>): void => {
    const {value} = e.target;
    setFormValue(value);
    onSearch(value);
  }

  return (
    <div className="searchForm">
      <form>
        <input required className='searchForm-input' 
          form='search' 
          placeholder='Поиск'
          value={formValue ?? ''}
          name="search"
          onChange={handleChangeSearch}>
        </input>
      </form>
    </div>
  );
}