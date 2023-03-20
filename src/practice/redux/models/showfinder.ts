export interface Show {
        id:             number;
        url:            string;
        name:           string;
        type:           string;
        language:       string;
        genres:         string[];
        status:         string;
        runtime:        number;
        rating:         Rating;
        image:          Image;
        summary:        string;
    }
     
 interface Image {
        medium:   string;
        original: string;
    }
    
 interface Rating {
        average: null;
    }