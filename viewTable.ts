interface Menu {
  availableOptions: any[];
  selectedOptions: string;
  searchAttribute: string;
  model: FormControl;
}

export class ViewTable {

highlightUpdateVehicleType = 'All';

vehicleTypes: Menu = {
    availableOptions: [],
    selectedOptions: '%',
    searchAttribute: 'vehicleType',
    model: new FormControl()
  };

// Filter data based on search
  dataFilter(event: Event, menu: Menu): void {
    const filterValue = (event.target as HTMLInputElement).value;
    menu.dataSource.filter = filterValue.trim().toLowerCase();
  }

getData(attribute: string, menu: Menu): void {
    this.service.getFilterOptions(parameters).subscribe(x => {
        menu.availableOptions = x;
        menu.dataSource = new MatTableDataSource(x);
    }
  }




}
