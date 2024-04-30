import { AntButton } from './AntButton';
import { AntDescriptions } from './AntDescriptions';
import { AntDropdown } from './AntDropdown';
import { AntInput } from './AntInput';
import { AntModal } from './AntModal';
import { AntSkeleton } from './AntSkeleton';
import { AntTable } from './AntTable';

const AntdStyle = () => {
  return (
    <>
      <AntDropdown />
      <AntInput />
      <AntButton />
      <AntSkeleton />
      <AntTable />
      <AntDescriptions />
      <AntModal />
    </>
  );
};

export default AntdStyle;
