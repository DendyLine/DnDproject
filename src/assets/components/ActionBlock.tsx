import { Auth, Searchbar, Table } from './index';

export const ActionBlock = () => {
  return (
    <div className="Action-block">
      <div className='Action-block__header'>
        <Searchbar/>
        <Auth/>
      </div>
      <Table/>
    </div>
  );
};