
export class DataMockup {
    day!: string;
    oranges!: number;
}


class Area {
    name!: string;
    area!: number;
}

export class PieOptions {
    title!: string;
    palette!: string;
    dataSource!: Area[];
}


export class DashboardService {
    data: DataMockup[] = [{
        day: 'Monday',
        oranges: 3,
    }, {
        day: 'Tuesday',
        oranges: 2,
    }, {
        day: 'Wednesday',
        oranges: 3,
    }, {
        day: 'Thursday',
        oranges: 4,
    }, {
        day: 'Friday',
        oranges: 6,
    }, {
        day: 'Saturday',
        oranges: 11,
    }, {
        day: 'Sunday',
        oranges: 4,
    }];

    countries: Area[] = [{
        name: 'Russia',
        area: 0.12,
    }, {
        name: 'Canada',
        area: 0.07,
    }, {
        name: 'USA',
        area: 0.07,
    }, {
        name: 'China',
        area: 0.07,
    }, {
        name: 'Brazil',
        area: 0.06,
    }, {
        name: 'Australia',
        area: 0.05,
    }, {
        name: 'India',
        area: 0.02,
    }, {
        name: 'Others',
        area: 0.55,
    }];

    waterLandRatio: Area[] = [{
        name: 'Land',
        area: 0.29,
    }, {
        name: 'Water',
        area: 0.71,
    }];

    getData(): DataMockup[] {
        return this.data;
    }

    getPies(): PieOptions[] {
        return [{
          title: 'Area of Countries',
          palette: 'Soft',
          dataSource: this.countries,
        }, {
          title: 'Water/Land Ratio',
          palette: 'Soft Pastel',
          dataSource: this.waterLandRatio,
        }];
      }
}