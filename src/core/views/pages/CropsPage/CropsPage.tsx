import * as React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer/SearchBarContainer';
import Table from '../../reusables/TableWithSorting/TableWithSorting';
import styles from './CropsPage.module.css';
import Heading from '../../reusables/Heading/Heading';
import plantsStore from '../../../stores/CropsStore/CropsStore';
import { observer } from 'mobx-react-lite';
import LoadingWrapper from '../../reusables/LoadingWrapper/LoadingWrapper';
import { SearchBarProps } from '../../containers/SearchBarContainer/SearchBarContainer';
import { TableProps } from '../../reusables/TableWithSorting/TableWithSorting';
import { Plant } from '../../../../auxiliary/interfaces/Plant';
import ButtonContainer from '../../reusables/ButtonContainer/ButtonContainer';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const CropsPage: React.FC = observer(() => {
  const navigate = useNavigate();

  const searchBarProps: SearchBarProps = {
    searchQuery: plantsStore.searchQuery.value,
    error: plantsStore.searchQuery.error,
    setSearchQuery: plantsStore.setSearchQuery,
    filterCriteria: plantsStore.filterCriteria,
    setFilterCriteria: plantsStore.setFilterCriteria,
    genusOptions: plantsStore.genusOptions,
  };

  const tableProps: TableProps<Plant> = {
    headers: plantsStore.tableHeaders,
    data: plantsStore.filteredPlants.map((plant) => ({
      ...plant,
      actions: (
        <div className={styles.actionIcons}>
          <FaEdit
            className={styles.editIcon}
            onClick={() => handleEdit(plant.id)}
            title="Edit Plant"
          />
          <FaTrash
            className={styles.deleteIcon}
            onClick={() => handleDelete(plant.id)}
            title="Delete Plant"
          />
        </div>
      ),
    })),
    onSort: (field) => plantsStore.setSortField(field),
    sortField: plantsStore.sortField,
    sortOrder: plantsStore.sortOrder,
  };

  const buttonContainerData = {
    clickHandler: () => navigate('/addCropPage'),
    label: 'Add Crop',
  };

  const handleEdit = (id: number) => {
    console.log(`Edit plant with id: ${id}`);
    navigate(`/editPlant/${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete plant with id: ${id}`);
    plantsStore.deletePlant(id);
  };

  return (
    <section className={styles.section}>
      <Heading level={1} text="Crop Database" />
      <LoadingWrapper isLoading={plantsStore.isLoading}>
        <SearchBarContainer {...searchBarProps} />
        <Table {...tableProps} />
        <ButtonContainer {...buttonContainerData} />
      </LoadingWrapper>
    </section>
  );
});

export default CropsPage;
