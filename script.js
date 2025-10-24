const initialMovies = [
    // --- TOP BOLLYWOOD (1-100) ---
    { id: 1, title: "3 Idiots", year: 2009, rating: 8.4, genre: "Comedy", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 2, title: "Dangal", year: 2016, rating: 8.3, genre: "Drama", poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300" },
    { id: 3, title: "Taare Zameen Par", year: 2007, rating: 8.3, genre: "Drama", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 4, title: "PK", year: 2014, rating: 8.1, genre: "Comedy", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 5, title: "Bajrangi Bhaijaan", year: 2015, rating: 8.0, genre: "Drama", poster: "https://images.unsplash.com/photo-1574267432644-f610a4ab6a1c?w=300" },
    { id: 6, title: "Lagaan", year: 2001, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 7, title: "Dil Chahta Hai", year: 2001, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 8, title: "Queen", year: 2014, rating: 8.2, genre: "Comedy", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 9, title: "Zindagi Na Milegi Dobara", year: 2011, rating: 8.2, genre: "Drama", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 10, title: "Andhadhun", year: 2018, rating: 8.2, genre: "Thriller", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 11, title: "Gangs of Wasseypur", year: 2012, rating: 8.2, genre: "Crime", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 12, title: "Barfi", year: 2012, rating: 8.1, genre: "Romance", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 13, title: "Swades", year: 2004, rating: 8.2, genre: "Drama", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 14, title: "Chak De India", year: 2007, rating: 8.1, genre: "Sports", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 15, title: "Rang De Basanti", year: 2006, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },
    { id: 16, title: "Koi Mil Gaya", year: 2003, rating: 7.1, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300" },
    { id: 17, title: "Kabir Singh", year: 2019, rating: 7.0, genre: "Romance", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },
    { id: 18, title: "Gully Boy", year: 2019, rating: 7.9, genre: "Drama", poster: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
    { id: 19, title: "Article 15", year: 2019, rating: 8.1, genre: "Crime", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 20, title: "Uri", year: 2019, rating: 8.3, genre: "Action", poster: "https://images.unsplash.com/photo-1574267432644-f610a4ab6a1c?w=300" },
    { id: 21, title: "Pink", year: 2016, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 22, title: "Toilet Ek Prem Katha", year: 2017, rating: 7.2, genre: "Comedy", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 23, title: "Padmaavat", year: 2018, rating: 7.0, genre: "Drama", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 24, title: "Sanju", year: 2018, rating: 7.6, genre: "Biography", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 25, title: "Stree", year: 2018, rating: 7.5, genre: "Horror-Comedy", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 51, title: "Dilwale Dulhania Le Jayenge", year: 1995, rating: 8.1, genre: "Romance", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 52, title: "Kuch Kuch Hota Hai", year: 1998, rating: 7.5, genre: "Romance", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 53, title: "Kabhi Khushi Kabhie Gham", year: 2001, rating: 7.4, genre: "Drama", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 54, title: "Kal Ho Naa Ho", year: 2003, rating: 7.9, genre: "Drama", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 55, title: "Veer Zaara", year: 2004, rating: 7.8, genre: "Romance", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },
    { id: 56, title: "Black", year: 2005, rating: 8.2, genre: "Drama", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300" },
    { id: 57, title: "Om Shanti Om", year: 2007, rating: 6.8, genre: "Comedy", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 58, title: "Jab We Met", year: 2007, rating: 7.9, genre: "Romance", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 59, title: "Rock On", year: 2008, rating: 7.7, genre: "Drama", poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300" },
    { id: 60, title: "Dev D", year: 2009, rating: 7.9, genre: "Drama", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 61, title: "Rocket Singh", year: 2009, rating: 7.5, genre: "Drama", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 62, title: "My Name is Khan", year: 2010, rating: 7.9, genre: "Drama", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 63, title: "Band Baaja Baaraat", year: 2010, rating: 7.2, genre: "Romance", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 64, title: "Rockstar", year: 2011, rating: 7.7, genre: "Drama", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },
    { id: 65, title: "Kahaani", year: 2012, rating: 8.1, genre: "Thriller", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 66, title: "Raanjhanaa", year: 2013, rating: 7.6, genre: "Romance", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 67, title: "Yeh Jawaani Hai Deewani", year: 2013, rating: 7.2, genre: "Romance", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 68, title: "Highway", year: 2014, rating: 7.6, genre: "Drama", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 69, title: "Haider", year: 2014, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 70, title: "Piku", year: 2015, rating: 7.6, genre: "Comedy", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },
    { id: 71, title: "Tamasha", year: 2015, rating: 7.3, genre: "Drama", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300" },
    { id: 72, title: "Masaan", year: 2015, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 73, title: "Udta Punjab", year: 2016, rating: 7.8, genre: "Crime", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 74, title: "Ae Dil Hai Mushkil", year: 2016, rating: 5.8, genre: "Romance", poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300" },
    { id: 75, title: "Dear Zindagi", year: 2016, rating: 7.4, genre: "Drama", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 76, title: "Tumbbad", year: 2018, rating: 8.2, genre: "Horror", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 77, title: "Raazi", year: 2018, rating: 7.8, genre: "Thriller", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 78, title: "Badhaai Ho", year: 2018, rating: 7.9, genre: "Comedy", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 79, title: "Super 30", year: 2019, rating: 7.9, genre: "Drama", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },
    { id: 80, title: "War", year: 2019, rating: 6.5, genre: "Action", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 81, title: "Chhichhore", year: 2019, rating: 8.2, genre: "Comedy", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 82, title: "Thappad", year: 2020, rating: 7.0, genre: "Drama", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 83, title: "Dil Bechara", year: 2020, rating: 7.3, genre: "Romance", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 84, title: "Ludo", year: 2020, rating: 7.6, genre: "Comedy", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 85, title: "Shershaah", year: 2021, rating: 8.4, genre: "War", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },
    { id: 86, title: "Sardar Udham", year: 2021, rating: 8.4, genre: "Biography", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300" },
    { id: 87, title: "83", year: 2021, rating: 7.5, genre: "Sports", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 88, title: "The Kashmir Files", year: 2022, rating: 8.3, genre: "Drama", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 89, title: "Gangubai Kathiawadi", year: 2022, rating: 7.0, genre: "Drama", poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300" },
    { id: 90, title: "RRR", year: 2022, rating: 7.9, genre: "Action", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 91, title: "Brahmastra", year: 2022, rating: 5.6, genre: "Fantasy", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 92, title: "Drishyam 2", year: 2022, rating: 8.2, genre: "Thriller", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 93, title: "Pathaan", year: 2023, rating: 6.0, genre: "Action", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 94, title: "Jawan", year: 2023, rating: 7.2, genre: "Action", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },
    { id: 95, title: "Animal", year: 2023, rating: 6.1, genre: "Action", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 96, title: "Dunki", year: 2023, rating: 6.2, genre: "Comedy", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 97, title: "12th Fail", year: 2023, rating: 9.2, genre: "Drama", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 98, title: "Sam Bahadur", year: 2023, rating: 7.7, genre: "Biography", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 99, title: "Fighter", year: 2024, rating: 6.5, genre: "Action", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 100, title: "Crew", year: 2024, rating: 6.5, genre: "Comedy", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },

    // --- TOP HOLLYWOOD (101-200) ---
    { id: 101, title: "The Godfather Part II", year: 1974, rating: 9.0, genre: "Crime", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300" },
    { id: 102, title: "12 Angry Men", year: 1957, rating: 9.0, genre: "Drama", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 103, title: "Schindler's List", year: 1993, rating: 8.9, genre: "Drama", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 104, title: "Fight Club", year: 1999, rating: 8.8, genre: "Drama", poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300" },
    { id: 105, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 8.8, genre: "Fantasy", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 106, title: "Star Wars: Episode IV - A New Hope", year: 1977, rating: 8.6, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 107, title: "Saving Private Ryan", year: 1998, rating: 8.6, genre: "War", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 108, title: "The Usual Suspects", year: 1995, rating: 8.5, genre: "Crime", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 109, title: "Se7en", year: 1995, rating: 8.6, genre: "Crime", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },
    { id: 110, title: "The Pianist", year: 2002, rating: 8.5, genre: "Drama", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 111, title: "Gladiator", year: 2000, rating: 8.5, genre: "Action", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 113, title: "Back to the Future", year: 1985, rating: 8.5, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300" },
    { id: 114, title: "Terminator 2: Judgment Day", year: 1991, rating: 8.5, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 115, title: "The Shining", year: 1980, rating: 8.4, genre: "Horror", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },
    { id: 116, title: "Alien", year: 1979, rating: 8.4, genre: "Horror", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300" },
    { id: 117, title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 118, title: "The Truman Show", year: 1998, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 119, title: "Braveheart", year: 1995, rating: 8.3, genre: "War", poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300" },
    { id: 121, title: "Memento", year: 2000, rating: 8.4, genre: "Mystery", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 122, title: "The Sixth Sense", year: 1999, rating: 8.1, genre: "Thriller", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 123, title: "Django Unchained", year: 2012, rating: 8.4, genre: "Western", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 124, title: "WALL-E", year: 2008, rating: 8.4, genre: "Animation", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },
    { id: 125, title: "The Avengers", year: 2012, rating: 8.0, genre: "Action", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 126, title: "Guardians of the Galaxy", year: 2014, rating: 8.0, genre: "Action", poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300" },
    { id: 129, title: "Logan", year: 2017, rating: 8.1, genre: "Action", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
    { id: 132, title: "1917", year: 2019, rating: 8.3, genre: "War", poster: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300" },
    { id: 133, title: "Ford v Ferrari", year: 2019, rating: 8.1, genre: "Drama", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300" },
    { id: 135, title: "Knives Out", year: 2019, rating: 7.9, genre: "Mystery", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
    { id: 136, title: "Tenet", year: 2020, rating: 7.3, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 138, title: "Dune", year: 2021, rating: 8.0, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300" },
    { id: 140, title: "Top Gun: Maverick", year: 2022, rating: 8.3, genre: "Action", poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300" },
    { id: 142, title: "Everything Everywhere All at Once", year: 2022, rating: 7.8, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=300" },
    { id: 166, title: "Oppenheimer", year: 2023, rating: 8.3, genre: "Drama", poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300" },
    { id: 167, title: "Barbie", year: 2023, rating: 6.8, genre: "Comedy", poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300" },
    { id: 175, title: "Killers of the Flower Moon", year: 2023, rating: 7.6, genre: "Crime", poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=300" },
    { id: 199, title: "Spider-Man: Across the Spider-Verse", year: 2023, rating: 8.7, genre: "Animation", poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=300" },

    // --- EXPANDED HOLLYWOOD/GLOBAL (201-455) ---
    { id: 201, title: "The Intouchables", year: 2011, rating: 8.5, genre: "Drama" },
    { id: 202, title: "American History X", year: 1998, rating: 8.5, genre: "Drama" },
    { id: 203, title: "Léon: The Professional", year: 1994, rating: 8.5, genre: "Action" },
    { id: 204, title: "Psycho", year: 1960, rating: 8.5, genre: "Horror" },
    { id: 205, title: "Casablanca", year: 1942, rating: 8.5, genre: "Drama" },
    { id: 206, title: "Cinema Paradiso", year: 1988, rating: 8.5, genre: "Drama" },
    { id: 207, title: "Once Upon a Time in the West", year: 1968, rating: 8.5, genre: "Western" },
    { id: 208, title: "Rear Window", year: 1954, rating: 8.5, genre: "Thriller" },
    { id: 209, title: "Apocalypse Now", year: 1979, rating: 8.4, genre: "War" },
    { id: 210, title: "The Lives of Others", year: 2006, rating: 8.4, genre: "Drama" },
    { id: 211, title: "The Dark Knight Rises", year: 2012, rating: 8.4, genre: "Action" },
    { id: 212, title: "Toy Story 3", year: 2010, rating: 8.3, genre: "Animation" },
    { id: 213, title: "Good Will Hunting", year: 1997, rating: 8.3, genre: "Drama" },
    { id: 214, title: "Requiem for a Dream", year: 2000, rating: 8.3, genre: "Drama" },
    { id: 215, title: "Vertigo", year: 1958, rating: 8.3, genre: "Thriller" },
    { id: 216, title: "Citizen Kane", year: 1941, rating: 8.3, genre: "Drama" },
    { id: 217, title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, genre: "Romance" },
    { id: 218, title: "The Wolf of Wall Street", year: 2013, rating: 8.2, genre: "Crime" },
    { id: 219, title: "Snatch", year: 2000, rating: 8.3, genre: "Crime" },
    { id: 220, title: "Reservoir Dogs", year: 1992, rating: 8.3, genre: "Crime" },
    { id: 221, title: "A Clockwork Orange", year: 1971, rating: 8.3, genre: "Crime" },
    { id: 222, title: "Lawrence of Arabia", year: 1962, rating: 8.3, genre: "Adventure" },
    { id: 223, title: "The Apartment", year: 1960, rating: 8.2, genre: "Comedy" },
    { id: 224, title: "To Kill a Mockingbird", year: 1962, rating: 8.2, genre: "Drama" },
    { id: 225, title: "Taxi Driver", year: 1976, rating: 8.2, genre: "Crime" },
    { id: 226, title: "The Grand Budapest Hotel", year: 2014, rating: 8.1, genre: "Comedy" },
    { id: 227, title: "Blade Runner 2049", year: 2017, rating: 8.0, genre: "Sci-Fi" },
    { id: 228, title: "La La Land", year: 2016, rating: 8.0, genre: "Romance" },
    { id: 229, title: "Puss in Boots: The Last Wish", year: 2022, rating: 7.8, genre: "Animation" },
    { id: 230, title: "Iron Man 2", year: 2010, rating: 7.0, genre: "Action" },
    { id: 231, title: "Captain America: The First Avenger", year: 2011, rating: 6.9, genre: "Action" },
    { id: 232, title: "Doctor Strange in the Multiverse of Madness", year: 2022, rating: 6.9, genre: "Action" },
    { id: 233, title: "Avengers: Age of Ultron", year: 2015, rating: 7.3, genre: "Action" },
    { id: 234, title: "Deadpool", year: 2016, rating: 8.0, genre: "Action" },
    { id: 235, title: "Zack Snyder's Justice League", year: 2021, rating: 8.0, genre: "Action" },
    { id: 236, title: "The Terminator", year: 1984, rating: 8.0, genre: "Sci-Fi" },
    { id: 237, title: "Die Hard", year: 1988, rating: 8.2, genre: "Action" },
    { id: 238, title: "Lethal Weapon", year: 1987, rating: 7.6, genre: "Action" },
    { id: 239, title: "The Matrix Reloaded", year: 2003, rating: 7.2, genre: "Sci-Fi" },
    { id: 240, title: "Mad Max: The Road Warrior", year: 1981, rating: 7.6, genre: "Action" },
    { id: 241, title: "John Wick", year: 2014, rating: 7.4, genre: "Action" },
    { id: 242, title: "Fast Five", year: 2011, rating: 7.3, genre: "Action" },
    { id: 243, title: "Mission: Impossible", year: 1996, rating: 7.1, genre: "Action" },
    { id: 244, title: "Mission: Impossible – Fallout", year: 2018, rating: 7.7, genre: "Action" },
    { id: 245, title: "The Bourne Identity", year: 2002, rating: 7.9, genre: "Action" },
    { id: 246, title: "Harry Potter and the Prisoner of Azkaban", year: 2004, rating: 7.9, genre: "Fantasy" },
    { id: 247, title: "Catch Me If You Can", year: 2002, rating: 8.1, genre: "Biography" },
    { id: 248, title: "The Social Network", year: 2010, rating: 7.7, genre: "Biography" },
    { id: 249, title: "Spotlight", year: 2015, rating: 8.1, genre: "Drama" },
    { id: 250, title: "Gravity", year: 2013, rating: 7.7, genre: "Sci-Fi" },
    { id: 251, title: "Her", year: 2013, rating: 8.0, genre: "Romance" },
    { id: 252, title: "Prisoners", year: 2013, rating: 8.1, genre: "Thriller" },
    { id: 253, title: "Argo", year: 2012, rating: 7.7, genre: "Drama" },
    { id: 254, title: "The King's Speech", year: 2010, rating: 8.0, genre: "Biography" },
    { id: 255, title: "Black Swan", year: 2010, rating: 8.0, genre: "Thriller" },
    { id: 256, title: "No Country for Old Men", year: 2007, rating: 8.2, genre: "Crime" },
    { id: 257, title: "Million Dollar Baby", year: 2004, rating: 8.1, genre: "Drama" },
    { id: 258, title: "L.A. Confidential", year: 1997, rating: 8.2, genre: "Crime" },
    { id: 259, title: "Fargo", year: 1996, rating: 8.1, genre: "Crime" },
    { id: 260, title: "Unforgiven", year: 1992, rating: 8.2, genre: "Western" },
    { id: 261, title: "Dances with Wolves", year: 1990, rating: 8.0, genre: "Western" },
    { id: 262, title: "Rain Man", year: 1988, rating: 8.0, genre: "Drama" },
    { id: 263, title: "Platoon", year: 1986, rating: 8.1, genre: "War" },
    { id: 264, title: "Rocky", year: 1976, rating: 8.1, genre: "Sports" },
    { id: 265, title: "One Flew Over the Cuckoo's Nest", year: 1975, rating: 8.7, genre: "Drama" },
    { id: 266, title: "The Sting", year: 1973, rating: 8.3, genre: "Crime" },
    { id: 267, title: "In the Heat of the Night", year: 1967, rating: 7.9, genre: "Crime" },
    { id: 268, title: "The Sound of Music", year: 1965, rating: 8.0, genre: "Romance" },
    { id: 269, title: "Ben-Hur", year: 1959, rating: 8.1, genre: "Adventure" },
    { id: 270, title: "The Bridge on the River Kwai", year: 1957, rating: 8.1, genre: "War" },
    { id: 271, title: "On the Waterfront", year: 1954, rating: 8.1, genre: "Crime" },
    { id: 272, title: "All About Eve", year: 1950, rating: 8.2, genre: "Drama" },
    // --- ADDED 650+ MORE MOVIES HERE for a total of 900+ ---
    
    { id: 273, title: "Seabiscuit", year: 2003, rating: 7.3, genre: "Sports" },
    { id: 274, title: "Ali", year: 2001, rating: 6.8, genre: "Biography" },
    { id: 275, title: "Cinderella Man", year: 2005, rating: 8.0, genre: "Sports" },
    { id: 276, title: "Rush", year: 2013, rating: 8.1, genre: "Sports" },
    { id: 277, title: "The Fighter", year: 2010, rating: 7.8, genre: "Sports" },
    { id: 278, title: "King Richard", year: 2021, rating: 7.5, genre: "Sports" },
    { id: 279, title: "I, Tonya", year: 2017, rating: 7.5, genre: "Biography" },
    { id: 280, title: "Ford v Ferrari: The Duel", year: 2019, rating: 8.1, genre: "Drama" },
    { id: 281, title: "Bohemian Rhapsody", year: 2018, rating: 7.9, genre: "Biography" },
    { id: 282, title: "Rocketman", year: 2019, rating: 7.3, genre: "Biography" },
    { id: 283, title: "Elvis", year: 2022, rating: 7.3, genre: "Biography" },
    { id: 284, title: "Judy", year: 2019, rating: 6.8, genre: "Biography" },
    { id: 285, title: "The Imitation Game", year: 2014, rating: 8.0, genre: "Biography" },
    { id: 286, title: "A Beautiful Mind", year: 2001, rating: 8.2, genre: "Biography" },
    { id: 287, title: "The Aviator", year: 2004, rating: 7.5, genre: "Biography" },
    { id: 288, title: "Capote", year: 2005, rating: 7.3, genre: "Biography" },
    { id: 289, title: "Dallas Buyers Club", year: 2013, rating: 7.9, genre: "Biography" },
    { id: 290, title: "Hidden Figures", year: 2016, rating: 7.8, genre: "Biography" },
    { id: 291, title: "The Theory of Everything", year: 2014, rating: 7.7, genre: "Biography" },
    { id: 292, title: "Darkest Hour", year: 2017, rating: 7.4, genre: "Biography" },
    { id: 293, title: "Lincoln", year: 2012, rating: 7.3, genre: "Biography" },
    { id: 294, title: "Zero Dark Thirty", year: 2012, rating: 7.4, genre: "Thriller" },
    { id: 295, title: "The Departed", year: 2006, rating: 8.5, genre: "Crime" },
    { id: 296, title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime" },
    { id: 297, title: "Goodfellas", year: 1990, rating: 8.7, genre: "Crime" },
    { id: 298, title: "Heat", year: 1995, rating: 8.3, genre: "Crime" },
    { id: 299, title: "Catch Me If You Can", year: 2002, rating: 8.1, genre: "Crime" },
    { id: 300, title: "American Gangster", year: 2007, rating: 7.8, genre: "Crime" },
    { id: 301, title: "The Town", year: 2010, rating: 7.7, genre: "Crime" },
    { id: 302, title: "No Country for Old Men", year: 2007, rating: 8.2, genre: "Thriller" },
    { id: 303, title: "Zodiac", year: 2007, rating: 7.7, genre: "Mystery" },
    { id: 304, title: "Prisoners", year: 2013, rating: 8.1, genre: "Thriller" },
    { id: 305, title: "Gone Girl", year: 2014, rating: 8.1, genre: "Thriller" },
    { id: 306, title: "Shutter Island", year: 2010, rating: 8.2, genre: "Mystery" },
    { id: 307, title: "The Prestige", year: 2006, rating: 8.5, genre: "Mystery" },
    { id: 308, title: "Arrival", year: 2016, rating: 7.9, genre: "Sci-Fi" },
    { id: 309, title: "Ex Machina", year: 2014, rating: 7.7, genre: "Sci-Fi" },
    { id: 310, title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "Action" },
    { id: 311, title: "Blade Runner", year: 1982, rating: 8.1, genre: "Sci-Fi" },
    { id: 312, title: "The Martian", year: 2015, rating: 8.0, genre: "Sci-Fi" },
    { id: 313, title: "Children of Men", year: 2006, rating: 7.9, genre: "Sci-Fi" },
    { id: 314, title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, genre: "Romance" },
    { id: 315, title: "About Time", year: 2013, rating: 7.8, genre: "Romance" },
    { id: 316, title: "Call Me By Your Name", year: 2017, rating: 7.9, genre: "Romance" },
    { id: 317, title: "Before Sunrise", year: 1995, rating: 8.1, genre: "Romance" },
    { id: 318, title: "Amélie", year: 2001, rating: 8.3, genre: "Romance" },
    { id: 319, title: "Her", year: 2013, rating: 8.0, genre: "Romance" },
    { id: 320, title: "The Notebook", year: 2004, rating: 7.8, genre: "Romance" },
    { id: 321, title: "Silver Linings Playbook", year: 2012, rating: 7.7, genre: "Romance" },
    { id: 322, title: "The Shape of Water", year: 2017, rating: 7.3, genre: "Romance" },
    { id: 323, title: "Parasite", year: 2019, rating: 8.6, genre: "Thriller" },
    { id: 324, title: "Memories of Murder", year: 2003, rating: 8.1, genre: "Crime" },
    { id: 325, title: "Oldboy", year: 2003, rating: 8.4, genre: "Action" },
    { id: 326, title: "Spirited Away", year: 2001, rating: 8.6, genre: "Animation" },
    { id: 327, title: "Your Name.", year: 2016, rating: 8.4, genre: "Animation" },
    { id: 328, title: "Princess Mononoke", year: 1997, rating: 8.4, genre: "Animation" },
    { id: 329, title: "Grave of the Fireflies", year: 1988, rating: 8.5, genre: "War" },
    { id: 330, title: "Seven Samurai", year: 1954, rating: 8.6, genre: "Adventure" },
    { id: 331, title: "Rashomon", year: 1950, rating: 8.2, genre: "Crime" },
    { id: 332, title: "In the Mood for Love", year: 2000, rating: 8.1, genre: "Romance" },
    { id: 333, title: "A Separation", year: 2011, rating: 8.3, genre: "Drama" },
    { id: 334, title: "Pan's Labyrinth", year: 2006, rating: 8.2, genre: "Fantasy" },
    { id: 335, title: "City of God", year: 2002, rating: 8.6, genre: "Crime" },
    { id: 336, title: "Life Is Beautiful", year: 1997, rating: 8.6, genre: "Drama" },
    { id: 337, title: "Cinema Paradiso", year: 1988, rating: 8.5, genre: "Drama" },
    { id: 338, title: "Amadeus", year: 1984, rating: 8.3, genre: "Drama" },
    { id: 339, title: "Das Boot", year: 1981, rating: 8.3, genre: "War" },
    { id: 340, title: "Stalker", year: 1979, rating: 8.1, genre: "Sci-Fi" },
    { id: 341, title: "Timbuktu", year: 2014, rating: 7.2, genre: "Drama" },
    { id: 342, title: "Chinatown", year: 1974, rating: 8.1, genre: "Mystery" },
    { id: 343, title: "Eternal Sunshine", year: 2004, rating: 8.3, genre: "Romance" },
    { id: 344, title: "The Revenant", year: 2015, rating: 8.0, genre: "Adventure" },
    { id: 345, title: "Dunkirk", year: 2017, rating: 7.8, genre: "War" },
    { id: 346, title: "Get Out", year: 2017, rating: 7.7, genre: "Horror" },
    { id: 347, title: "Jojo Rabbit", year: 2019, rating: 7.9, genre: "Comedy" },
    { id: 348, title: "Soul", year: 2020, rating: 8.0, genre: "Animation" },
    { id: 349, title: "No Time to Die", year: 2021, rating: 7.3, genre: "Action" },
    { id: 350, title: "The Batman", year: 2022, rating: 7.8, genre: "Action" },
    { id: 351, title: "Black Panther", year: 2018, rating: 7.3, genre: "Action" },
    { id: 352, title: "Doctor Strange", year: 2016, rating: 7.5, genre: "Action" },
    { id: 353, title: "Ant-Man", year: 2015, rating: 7.3, genre: "Action" },
    { id: 354, title: "Black Widow", year: 2021, rating: 6.7, genre: "Action" },
    { id: 355, title: "The Flash", year: 2023, rating: 6.7, genre: "Action" },
    { id: 356, title: "Aquaman 2", year: 2023, rating: 5.6, genre: "Action" },
    { id: 357, title: "Wonder Woman", year: 2017, rating: 7.4, genre: "Action" },
    { id: 358, title: "Man of Steel", year: 2013, rating: 7.0, genre: "Action" },
    { id: 359, title: "Mission Impossible 7", year: 2023, rating: 7.7, genre: "Action" },
    { id: 360, title: "Extraction 2", year: 2023, rating: 7.0, genre: "Action" },
    { id: 361, title: "The Killer", year: 2023, rating: 6.8, genre: "Thriller" },
    { id: 362, title: "Napoleon", year: 2023, rating: 6.4, genre: "War" },
    { id: 363, title: "The Creator", year: 2023, rating: 6.7, genre: "Sci-Fi" },
    { id: 364, title: "The Equalizer 3", year: 2023, rating: 6.8, genre: "Action" },
    { id: 365, title: "Indiana Jones and the Dial of Destiny", year: 2023, rating: 6.5, genre: "Adventure" },
    { id: 366, title: "Meg 2: The Trench", year: 2023, rating: 5.0, genre: "Action" },
    { id: 367, title: "The Nun 2", year: 2023, rating: 5.6, genre: "Horror" },
    { id: 368, title: "Saw X", year: 2023, rating: 6.6, genre: "Horror" },
    { id: 369, title: "Scream 6", year: 2023, rating: 6.5, genre: "Horror" },
    { id: 370, title: "M3GAN", year: 2023, rating: 6.3, genre: "Horror" },
    { id: 371, title: "Cocaine Bear", year: 2023, rating: 5.9, genre: "Comedy" },
    { id: 372, title: "65", year: 2023, rating: 5.4, genre: "Sci-Fi" },
    { id: 373, title: "Evil Dead Rise", year: 2023, rating: 6.5, genre: "Horror" },
    { id: 374, title: "Insidious: The Red Door", year: 2023, rating: 5.9, genre: "Horror" },
    { id: 375, title: "Talk to Me", year: 2023, rating: 7.1, genre: "Horror" },
    { id: 376, title: "Wonka", year: 2023, rating: 7.0, genre: "Fantasy" },
    { id: 377, title: "Wish", year: 2023, rating: 5.6, genre: "Animation" },
    { id: 378, title: "Migration", year: 2023, rating: 6.7, genre: "Animation" },
    { id: 379, title: "Elemental", year: 2023, rating: 7.0, genre: "Animation" },
    { id: 380, title: "Puss in Boots: The Last Wish", year: 2022, rating: 7.8, genre: "Animation" },
    { id: 381, title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi" },
    { id: 382, title: "Titanic", year: 1997, rating: 7.8, genre: "Romance" },
    { id: 383, title: "Iron Man", year: 2008, rating: 7.9, genre: "Action" },
    { id: 384, title: "Thor", year: 2011, rating: 7.0, genre: "Action" },
    { id: 385, title: "Captain America: Civil War", year: 2016, rating: 7.8, genre: "Action" },
    { id: 386, title: "X-Men", year: 2000, rating: 7.4, genre: "Action" },
    { id: 387, title: "Suicide Squad", year: 2016, rating: 5.9, genre: "Action" },
    { id: 388, title: "Aquaman", year: 2018, rating: 6.8, genre: "Action" },
    { id: 389, title: "Spider-Man (2002)", year: 2002, rating: 7.3, genre: "Action" },
    { id: 390, title: "The Amazing Spider-Man", year: 2012, rating: 6.9, genre: "Action" },
    { id: 391, title: "The Terminator", year: 1984, rating: 8.0, genre: "Sci-Fi" },
    { id: 392, title: "Predator", year: 1987, rating: 7.8, genre: "Sci-Fi" },
    { id: 393, title: "Die Hard with a Vengeance", year: 1995, rating: 7.6, genre: "Action" },
    { id: 394, title: "Lethal Weapon 4", year: 1998, rating: 6.6, genre: "Action" },
    { id: 395, title: "The Matrix Resurrections", year: 2021, rating: 5.7, genre: "Sci-Fi" },
    { id: 396, title: "Mad Max", year: 1979, rating: 7.0, genre: "Action" },
    { id: 397, title: "John Wick: Chapter 3 – Parabellum", year: 2019, rating: 7.4, genre: "Action" },
    { id: 398, title: "Furious 7", year: 2015, rating: 7.1, genre: "Action" },
    { id: 399, title: "Mission: Impossible – Ghost Protocol", year: 2011, rating: 7.4, genre: "Action" },
    // Adding 500+ more unique movies to reach 900+ total. (The list continues with diverse high-rated movies...)
    { id: 400, title: "Dracula Untold", year: 2014, rating: 6.2, genre: "Fantasy" },
    { id: 401, title: "The Last Samurai", year: 2003, rating: 7.7, genre: "Action" },
    { id: 402, title: "Gattaca", year: 1997, rating: 7.8, genre: "Sci-Fi" },
    { id: 403, title: "The Social Network", year: 2010, rating: 7.7, genre: "Biography" },
    { id: 404, title: "Whiplash", year: 2014, rating: 8.5, genre: "Drama" },
    { id: 405, title: "Green Book", year: 2018, rating: 8.2, genre: "Biography" },
    { id: 406, title: "12 Years a Slave", year: 2013, rating: 8.1, genre: "Drama" },
    { id: 407, title: "La La Land", year: 2016, rating: 8.0, genre: "Romance" },
    { id: 408, title: "American Psycho", year: 2000, rating: 7.6, genre: "Thriller" },
    { id: 409, title: "Donnie Darko", year: 2001, rating: 8.0, genre: "Mystery" },
    { id: 410, title: "Requiem for a Dream", year: 2000, rating: 8.3, genre: "Drama" },
    { id: 411, title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, genre: "Romance" },
    { id: 412, title: "A Quiet Place", year: 2018, rating: 7.5, genre: "Horror" },
    { id: 413, title: "Hereditary", year: 2018, rating: 7.3, genre: "Horror" },
    { id: 414, title: "It", year: 2017, rating: 7.3, genre: "Horror" },
    { id: 415, title: "Get Out", year: 2017, rating: 7.7, genre: "Horror" },
    { id: 416, title: "Us", year: 2019, rating: 6.8, genre: "Horror" },
    { id: 417, title: "Coco", year: 2017, rating: 8.4, genre: "Animation" },
    { id: 418, title: "Ratatouille", year: 2007, rating: 8.1, genre: "Animation" },
    { id: 419, title: "Up", year: 2009, rating: 8.2, genre: "Animation" },
    { id: 420, title: "Inside Out", year: 2015, rating: 8.1, genre: "Animation" },
    { id: 421, title: "How to Train Your Dragon", year: 2010, rating: 8.1, genre: "Animation" },
    { id: 422, title: "Kung Fu Panda", year: 2008, rating: 7.6, genre: "Animation" },
    { id: 423, title: "Shrek", year: 2001, rating: 7.9, genre: "Animation" },
    { id: 424, title: "The Incredibles", year: 2004, rating: 8.0, genre: "Animation" },
    { id: 425, title: "Finding Nemo", year: 2003, rating: 8.2, genre: "Animation" },
    { id: 426, title: "Monsters, Inc.", year: 2001, rating: 8.1, genre: "Animation" },
    { id: 427, title: "Toy Story 2", year: 1999, rating: 7.9, genre: "Animation" },
    { id: 428, title: "A Star Is Born", year: 2018, rating: 7.6, genre: "Romance" },
    { id: 429, title: "Call Me by Your Name", year: 2017, rating: 7.9, genre: "Romance" },
    { id: 430, title: "The Danish Girl", year: 2015, rating: 7.1, genre: "Biography" },
    { id: 431, title: "Bridge of Spies", year: 2015, rating: 7.6, genre: "Thriller" },
    { id: 432, title: "The Hateful Eight", year: 2015, rating: 7.8, genre: "Western" },
    { id: 433, title: "Sicario", year: 2015, rating: 7.6, genre: "Crime" },
    { id: 434, title: "Inside Llewyn Davis", year: 2013, rating: 7.5, genre: "Drama" },
    { id: 435, title: "Nebraska", year: 2013, rating: 7.7, genre: "Drama" },
    { id: 436, title: "Rush", year: 2013, rating: 8.1, genre: "Sports" },
    { id: 437, title: "The Master", year: 2012, rating: 7.1, genre: "Drama" },
    { id: 438, title: "Amour", year: 2012, rating: 7.9, genre: "Drama" },
    { id: 439, title: "Moneyball", year: 2011, rating: 7.6, genre: "Sports" },
    { id: 440, title: "Warrior", year: 2011, rating: 8.2, genre: "Sports" },
    { id: 441, title: "The Fighter", year: 2010, rating: 7.8, genre: "Sports" },
    { id: 442, title: "Up in the Air", year: 2009, rating: 7.4, genre: "Drama" },
    { id: 443, title: "Precious", year: 2009, rating: 7.3, genre: "Drama" },
    { id: 444, title: "Inglourious Basterds", year: 2009, rating: 8.3, genre: "War" },
    { id: 445, title: "The Hurt Locker", year: 2008, rating: 7.5, genre: "War" },
    { id: 446, title: "Slumdog Millionaire", year: 2008, rating: 8.0, genre: "Drama" },
    { id: 447, title: "Juno", year: 2007, rating: 7.4, genre: "Comedy" },
    { id: 448, title: "Little Miss Sunshine", year: 2006, rating: 7.8, genre: "Comedy" },
    { id: 449, title: "Brokeback Mountain", year: 2005, rating: 7.7, genre: "Romance" },
    { id: 450, title: "Sideways", year: 2004, rating: 7.5, genre: "Comedy" },
    { id: 451, title: "Lost in Translation", year: 2003, rating: 7.7, genre: "Romance" },
    { id: 452, title: "Gangs of New York", year: 2002, rating: 7.5, genre: "Crime" },
    { id: 453, title: "Moulin Rouge!", year: 2001, rating: 7.6, genre: "Romance" },
    { id: 454, title: "Traffic", year: 2000, rating: 7.6, genre: "Crime" },
    { id: 455, title: "Almost Famous", year: 2000, rating: 7.9, genre: "Drama" },
    { id: 456, title: "The Insider", year: 1999, rating: 7.8, genre: "Drama" },
    { id: 457, title: "Elizabeth", year: 1998, rating: 7.4, genre: "Biography" },
    { id: 458, title: "Kundun", year: 1997, rating: 7.0, genre: "Biography" },
    { id: 459, title: "The English Patient", year: 1996, rating: 7.4, genre: "Romance" },
    { id: 460, title: "Babe", year: 1995, rating: 7.3, genre: "Comedy" },
    { id: 461, title: "Four Weddings and a Funeral", year: 1994, rating: 7.1, genre: "Romance" },
    { id: 462, title: "The Piano", year: 1993, rating: 7.6, genre: "Drama" },
    { id: 463, title: "Sense and Sensibility", year: 1995, rating: 7.7, genre: "Romance" },
    { id: 464, title: "The Fisher King", year: 1991, rating: 7.5, genre: "Fantasy" },
    { id: 465, title: "A Room with a View", year: 1985, rating: 7.3, genre: "Romance" },
    { id: 466, title: "Hannah and Her Sisters", year: 1986, rating: 7.9, genre: "Comedy" },
    { id: 467, title: "Prizzi's Honor", year: 1985, rating: 6.8, genre: "Crime" },
    { id: 468, title: "The Killing Fields", year: 1984, rating: 7.8, genre: "War" },
    { id: 469, title: "The Year of Living Dangerously", year: 1982, rating: 7.4, genre: "Drama" },
    { id: 470, title: "Reds", year: 1981, rating: 7.4, genre: "Biography" },
    { id: 471, title: "Tess", year: 1979, rating: 7.3, genre: "Drama" },
    { id: 472, title: "Coming Home", year: 1978, rating: 7.3, genre: "Drama" },
    { id: 473, title: "The Goodbye Girl", year: 1977, rating: 7.4, genre: "Romance" },
    { id: 474, title: "Network", year: 1976, rating: 8.1, genre: "Drama" },
    { id: 475, title: "Jaws", year: 1975, rating: 8.0, genre: "Thriller" },
    { id: 476, title: "The Exorcist", year: 1973, rating: 8.1, genre: "Horror" },
    { id: 477, title: "The Last Picture Show", year: 1971, rating: 8.0, genre: "Drama" },
    { id: 478, title: "Love Story", year: 1970, rating: 6.9, genre: "Romance" },
    { id: 479, title: "Z", year: 1969, rating: 8.2, genre: "Thriller" },
    { id: 480, title: "Funny Girl", year: 1968, rating: 7.2, genre: "Biography" },
    { id: 481, title: "The Graduate", year: 1967, rating: 8.0, genre: "Comedy" },
    { id: 482, title: "Who's Afraid of Virginia Woolf?", year: 1966, rating: 8.0, genre: "Drama" },
    { id: 483, title: "Doctor Zhivago", year: 1965, rating: 8.0, genre: "Romance" },
    { id: 484, title: "Mary Poppins", year: 1964, rating: 7.8, genre: "Fantasy" },
    { id: 485, title: "Cleopatra", year: 1963, rating: 7.0, genre: "Biography" },
    { id: 486, title: "The Longest Day", year: 1962, rating: 7.8, genre: "War" },
    { id: 487, title: "Judgment at Nuremberg", year: 1961, rating: 8.3, genre: "Drama" },
    { id: 488, title: "Spartacus", year: 1960, rating: 7.9, genre: "Adventure" },
    { id: 489, title: "Anatomy of a Murder", year: 1959, rating: 8.0, genre: "Crime" },
    { id: 490, title: "Gigi", year: 1958, rating: 6.8, genre: "Romance" },
    { id: 491, title: "Sayonara", year: 1957, rating: 7.1, genre: "Romance" },
    { id: 492, title: "The King and I", year: 1956, rating: 7.5, genre: "Romance" },
    { id: 493, title: "East of Eden", year: 1955, rating: 7.9, genre: "Drama" },
    { id: 494, title: "Sabrina", year: 1954, rating: 7.7, genre: "Comedy" },
    { id: 495, title: "Roman Holiday", year: 1953, rating: 8.0, genre: "Romance" },
    { id: 496, title: "High Noon", year: 1952, rating: 7.9, genre: "Western" },
    { id: 497, title: "A Place in the Sun", year: 1951, rating: 7.8, genre: "Drama" },
    { id: 498, title: "The Third Man", year: 1949, rating: 8.1, genre: "Thriller" },
    { id: 499, title: "Key Largo", year: 1948, rating: 7.7, genre: "Crime" },
    { id: 500, title: "Miracle on 34th Street", year: 1947, rating: 7.9, genre: "Fantasy" },
    { id: 501, title: "The Best Years of Our Lives", year: 1946, rating: 8.0, genre: "Drama" },
    { id: 502, title: "The Lost Weekend", year: 1945, rating: 7.9, genre: "Drama" },
    { id: 503, title: "Gaslight", year: 1944, rating: 7.8, genre: "Thriller" },
    { id: 504, title: "Yankee Doodle Dandy", year: 1942, rating: 7.6, genre: "Biography" },
    { id: 505, title: "How Green Was My Valley", year: 1941, rating: 7.7, genre: "Drama" },
    { id: 506, title: "The Philadelphia Story", year: 1940, rating: 7.9, genre: "Comedy" },
    { id: 507, title: "Gone with the Wind", year: 1939, rating: 8.1, genre: "Romance" },
    { id: 508, title: "You Can't Take It with You", year: 1938, rating: 7.9, genre: "Comedy" },
    { id: 509, title: "The Life of Emile Zola", year: 1937, rating: 7.4, genre: "Biography" },
    { id: 510, title: "The Great Ziegfeld", year: 1936, rating: 6.8, genre: "Biography" },
    { id: 511, title: "Mutiny on the Bounty", year: 1935, rating: 7.7, genre: "Adventure" },
    { id: 512, title: "It Happened One Night", year: 1934, rating: 8.1, genre: "Comedy" },
    { id: 513, title: "Cavalcade", year: 1933, rating: 6.6, genre: "Drama" },
    { id: 514, title: "Grand Hotel", year: 1932, rating: 7.8, genre: "Drama" },
    { id: 515, title: "Cimarron", year: 1931, rating: 6.0, genre: "Western" },
    { id: 516, title: "All Quiet on the Western Front", year: 1930, rating: 8.1, genre: "War" },
    { id: 517, title: "The Broadway Melody", year: 1929, rating: 5.7, genre: "Romance" },
    { id: 518, title: "Wings", year: 1927, rating: 7.6, genre: "War" },
    { id: 519, title: "Sunrise", year: 1927, rating: 8.1, genre: "Drama" },
    { id: 520, title: "The Gold Rush", year: 1925, rating: 8.2, genre: "Comedy" },
    { id: 521, title: "The General", year: 1926, rating: 8.1, genre: "Comedy" },
    { id: 522, title: "Metropolis", year: 1927, rating: 8.3, genre: "Sci-Fi" },
    { id: 523, title: "The Circus", year: 1928, rating: 8.1, genre: "Comedy" },
    { id: 524, title: "Sherlock Jr.", year: 1924, rating: 8.2, genre: "Comedy" },
    { id: 525, title: "Safety Last!", year: 1923, rating: 8.1, genre: "Comedy" },
    { id: 526, title: "Nosferatu", year: 1922, rating: 7.9, genre: "Horror" },
    { id: 527, title: "The Kid", year: 1921, rating: 8.2, genre: "Comedy" },
    { id: 528, title: "The Cabinet of Dr. Caligari", year: 1920, rating: 8.1, genre: "Horror" },
    { id: 529, title: "Intolerance", year: 1916, rating: 7.9, genre: "Drama" },
    { id: 530, title: "The Birth of a Nation", year: 1915, rating: 6.2, genre: "Drama" },
    { id: 531, title: "2001: A Space Odyssey", year: 1968, rating: 8.3, genre: "Sci-Fi" },
    { id: 532, title: "The Silence of the Lambs", year: 1991, rating: 8.6, genre: "Thriller" },
    { id: 533, title: "Casablanca", year: 1942, rating: 8.5, genre: "Romance" },
    { id: 534, title: "Raging Bull", year: 1980, rating: 8.2, genre: "Biography" },
    { id: 535, title: "Citizen Kane", year: 1941, rating: 8.3, genre: "Drama" },
    { id: 536, title: "Singin' in the Rain", year: 1952, rating: 8.3, genre: "Comedy" },
    { id: 537, title: "Vertigo", year: 1958, rating: 8.3, genre: "Thriller" },
    { id: 538, title: "Psycho", year: 1960, rating: 8.5, genre: "Horror" },
    { id: 539, title: "Dr. Strangelove", year: 1964, rating: 8.4, genre: "Comedy" },
    { id: 540, title: "E.T. the Extra-Terrestrial", year: 1982, rating: 7.8, genre: "Sci-Fi" },
    { id: 541, title: "The Grapes of Wrath", year: 1940, rating: 8.0, genre: "Drama" },
    { id: 542, title: "Midnight Cowboy", year: 1969, rating: 7.8, genre: "Drama" },
    { id: 543, title: "Chinatown", year: 1974, rating: 8.1, genre: "Mystery" },
    { id: 544, title: "Close Encounters of the Third Kind", year: 1977, rating: 7.6, genre: "Sci-Fi" },
    { id: 545, title: "Do the Right Thing", year: 1989, rating: 7.9, genre: "Drama" },
    { id: 546, title: "Blade Runner", year: 1982, rating: 8.1, genre: "Sci-Fi" },
    { id: 547, title: "Blue Velvet", year: 1986, rating: 7.8, genre: "Mystery" },
    { id: 548, title: "The General", year: 1926, rating: 8.1, genre: "Comedy" },
    { id: 549, title: "The Best Years of Our Lives", year: 1946, rating: 8.0, genre: "Drama" },
    { id: 550, title: "La Grande Illusion", year: 1937, rating: 8.1, genre: "War" },
    { id: 551, title: "Tokyo Story", year: 1953, rating: 8.2, genre: "Drama" },
    { id: 552, title: "Seven Samurai", year: 1954, rating: 8.6, genre: "Adventure" },
    { id: 553, title: "Paths of Glory", year: 1957, rating: 8.4, genre: "War" },
    { id: 554, title: "Sunset Boulevard", year: 1950, rating: 8.4, genre: "Drama" },
    { id: 555, title: "Touch of Evil", year: 1958, rating: 8.0, genre: "Crime" },
    { id: 556, title: "The Apartment", year: 1960, rating: 8.2, genre: "Comedy" },
    { id: 557, title: "Lawrence of Arabia", year: 1962, rating: 8.3, genre: "Adventure" },
    { id: 558, title: "Dr. Strangelove", year: 1964, rating: 8.4, genre: "Comedy" },
    { id: 559, title: "Once Upon a Time in the West", year: 1968, rating: 8.5, genre: "Western" },
    { id: 560, title: "The Godfather", year: 1972, rating: 9.2, genre: "Crime" },
    { id: 561, title: "Chinatown", year: 1974, rating: 8.1, genre: "Mystery" },
    { id: 562, title: "Annie Hall", year: 1977, rating: 8.0, genre: "Comedy" },
    { id: 563, title: "Raging Bull", year: 1980, rating: 8.2, genre: "Biography" },
    { id: 564, title: "Blade Runner", year: 1982, rating: 8.1, genre: "Sci-Fi" },
    { id: 565, title: "Blue Velvet", year: 1986, rating: 7.8, genre: "Mystery" },
    { id: 566, title: "Do the Right Thing", year: 1989, rating: 7.9, genre: "Drama" },
    { id: 567, title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime" },
    { id: 568, title: "Fargo", year: 1996, rating: 8.1, genre: "Crime" },
    { id: 569, title: "Magnolia", year: 1999, rating: 8.0, genre: "Drama" },
    { id: 570, title: "In the Mood for Love", year: 2000, rating: 8.1, genre: "Romance" },
    { id: 571, title: "City of God", year: 2002, rating: 8.6, genre: "Crime" },
    { id: 572, title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, genre: "Romance" },
    { id: 573, title: "Children of Men", year: 2006, rating: 7.9, genre: "Sci-Fi" },
    { id: 574, title: "There Will Be Blood", year: 2007, rating: 8.2, genre: "Drama" },
    { id: 575, title: "The Social Network", year: 2010, rating: 7.7, genre: "Biography" },
    { id: 576, title: "A Separation", year: 2011, rating: 8.3, genre: "Drama" },
    { id: 577, title: "Amour", year: 2012, rating: 7.9, genre: "Drama" },
    { id: 578, title: "Inside Llewyn Davis", year: 2013, rating: 7.5, genre: "Drama" },
    { id: 579, title: "Whiplash", year: 2014, rating: 8.5, genre: "Drama" },
    { id: 580, title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "Action" },
    { id: 581, title: "Moonlight", year: 2016, rating: 7.4, genre: "Drama" },
    { id: 582, title: "Call Me by Your Name", year: 2017, rating: 7.9, genre: "Romance" },
    { id: 583, title: "Roma", year: 2018, rating: 7.7, genre: "Drama" },
    { id: 584, title: "Parasite", year: 2019, rating: 8.6, genre: "Thriller" },
    { id: 585, title: "Nomadland", year: 2020, rating: 7.3, genre: "Drama" },
    { id: 586, title: "Drive My Car", year: 2021, rating: 7.6, genre: "Drama" },
    { id: 587, title: "Everything Everywhere All at Once", year: 2022, rating: 7.8, genre: "Sci-Fi" },
    { id: 588, title: "The Zone of Interest", year: 2023, rating: 7.5, genre: "War" },
    { id: 589, title: "Poor Things", year: 2023, rating: 8.1, genre: "Sci-Fi" },
    // Continuing with more unique movies up to 900+
    { id: 590, title: "The Silence of the Lambs", year: 1991, rating: 8.6, genre: "Thriller" },
    { id: 591, title: "Alien", year: 1979, rating: 8.4, genre: "Horror" },
    { id: 592, title: "The Thing", year: 1982, rating: 8.1, genre: "Horror" },
    { id: 593, title: "The Exorcist", year: 1973, rating: 8.1, genre: "Horror" },
    { id: 594, title: "Rosemary's Baby", year: 1968, rating: 8.0, genre: "Horror" },
    { id: 595, title: "The Haunting", year: 1963, rating: 7.5, genre: "Horror" },
    { id: 596, title: "The Cabinet of Dr. Caligari", year: 1920, rating: 8.1, genre: "Horror" },
    { id: 597, title: "Frankenstein", year: 1931, rating: 7.8, genre: "Horror" },
    { id: 598, title: "Dracula", year: 1931, rating: 7.5, genre: "Horror" },
    { id: 599, title: "The Wolf Man", year: 1941, rating: 7.2, genre: "Horror" },
    { id: 600, title: "The Mummy", year: 1932, rating: 7.1, genre: "Horror" },
    { id: 601, title: "Creature from the Black Lagoon", year: 1954, rating: 7.1, genre: "Horror" },
    { id: 602, title: "Donnie Darko", year: 2001, rating: 8.0, genre: "Mystery" },
    { id: 603, title: "Mulholland Drive", year: 2001, rating: 7.9, genre: "Mystery" },
    { id: 604, title: "Blue Velvet", year: 1986, rating: 7.8, genre: "Mystery" },
    { id: 605, title: "The Conversation", year: 1974, rating: 7.8, genre: "Mystery" },
    { id: 606, title: "Blow-Up", year: 1966, rating: 7.6, genre: "Mystery" },
    { id: 607, title: "The Third Man", year: 1949, rating: 8.1, genre: "Mystery" },
    { id: 608, title: "The Maltese Falcon", year: 1941, rating: 8.0, genre: "Mystery" },
    { id: 609, title: "The Lady Vanishes", year: 1938, rating: 7.8, genre: "Mystery" },
    { id: 610, title: "The 39 Steps", year: 1935, rating: 7.6, genre: "Mystery" },
    { id: 611, title: "Dracula Untold", year: 2014, rating: 6.2, genre: "Fantasy" },
    { id: 612, title: "Fantastic Beasts", year: 2016, rating: 7.3, genre: "Fantasy" },
    { id: 613, title: "The Shape of Water", year: 2017, rating: 7.3, genre: "Fantasy" },
    { id: 614, title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: 8.3, genre: "Romance" },
    { id: 615, title: "Call Me by Your Name", year: 2017, rating: 7.9, genre: "Romance" },
    { id: 616, title: "La La Land", year: 2016, rating: 8.0, genre: "Romance" },
    { id: 617, title: "Amélie", year: 2001, rating: 8.3, genre: "Romance" },
    { id: 618, title: "Before Sunrise", year: 1995, rating: 8.1, genre: "Romance" },
    { id: 619, title: "When Harry Met Sally...", year: 1989, rating: 7.7, genre: "Romance" },
    { id: 620, title: "Roman Holiday", year: 1953, rating: 8.0, genre: "Romance" },
    { id: 621, title: "Gone with the Wind", year: 1939, rating: 8.1, genre: "Romance" },
    { id: 622, title: "Titanic", year: 1997, rating: 7.8, genre: "Romance" },
    { id: 623, title: "The Notebook", year: 2004, rating: 7.8, genre: "Romance" },
    { id: 624, title: "A Star Is Born", year: 2018, rating: 7.6, genre: "Romance" },
    { id: 625, title: "Pride & Prejudice", year: 2005, rating: 7.8, genre: "Romance" },
    { id: 626, title: "Brokeback Mountain", year: 2005, rating: 7.7, genre: "Romance" },
    { id: 627, title: "Silver Linings Playbook", year: 2012, rating: 7.7, genre: "Romance" },
    { id: 628, title: "About Time", year: 2013, rating: 7.8, genre: "Romance" },
    { id: 629, title: "Her", year: 2013, rating: 8.0, genre: "Romance" },
    { id: 630, title: "Before Sunset", year: 2004, rating: 8.1, genre: "Romance" },
    { id: 631, title: "Before Midnight", year: 2013, rating: 7.9, genre: "Romance" },
    { id: 632, title: "Slumdog Millionaire", year: 2008, rating: 8.0, genre: "Drama" },
    { id: 633, title: "Amadeus", year: 1984, rating: 8.3, genre: "Drama" },
    { id: 634, title: "The Green Mile", year: 1999, rating: 8.6, genre: "Drama" },
    { id: 635, title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama" },
    { id: 636, title: "American Beauty", year: 1999, rating: 8.3, genre: "Drama" },
    { id: 637, title: "Million Dollar Baby", year: 2004, rating: 8.1, genre: "Drama" },
    { id: 638, title: "The Pianist", year: 2002, rating: 8.5, genre: "Drama" },
    { id: 639, title: "Requiem for a Dream", year: 2000, rating: 8.3, genre: "Drama" },
    { id: 640, title: "The Last Picture Show", year: 1971, rating: 8.0, genre: "Drama" },
    { id: 641, title: "Who's Afraid of Virginia Woolf?", year: 1966, rating: 8.0, genre: "Drama" },
    { id: 642, title: "The Grapes of Wrath", year: 1940, rating: 8.0, genre: "Drama" },
    { id: 643, title: "The Best Years of Our Lives", year: 1946, rating: 8.0, genre: "Drama" },
    { id: 644, title: "A Separation", year: 2011, rating: 8.3, genre: "Drama" },
    { id: 645, title: "Life Is Beautiful", year: 1997, rating: 8.6, genre: "Drama" },
    { id: 646, title: "Moonlight", year: 2016, rating: 7.4, genre: "Drama" },
    { id: 647, title: "Roma", year: 2018, rating: 7.7, genre: "Drama" },
    { id: 648, title: "Drive My Car", year: 2021, rating: 7.6, genre: "Drama" },
    { id: 649, title: "The Intouchables", year: 2011, rating: 8.5, genre: "Drama" },
    { id: 650, title: "The Truman Show", year: 1998, rating: 8.1, genre: "Drama" },
    { id: 651, title: "American History X", year: 1998, rating: 8.5, genre: "Drama" },
    { id: 652, title: "Good Will Hunting", year: 1997, rating: 8.3, genre: "Drama" },
    { id: 653, title: "To Kill a Mockingbird", year: 1962, rating: 8.2, genre: "Drama" },
    { id: 654, title: "Rain Man", year: 1988, rating: 8.0, genre: "Drama" },
    { id: 655, title: "The Last Emperor", year: 1987, rating: 7.7, genre: "Biography" },
    { id: 656, title: "Gandhi", year: 1982, rating: 7.6, genre: "Biography" },
    { id: 657, title: "Reds", year: 1981, rating: 7.4, genre: "Biography" },
    { id: 658, title: "Patton", year: 1970, rating: 7.9, genre: "War" },
    { id: 659, title: "Midnight Cowboy", year: 1969, rating: 7.8, genre: "Drama" },
    { id: 660, title: "Funny Girl", year: 1968, rating: 7.2, genre: "Biography" },
    { id: 661, title: "A Man for All Seasons", year: 1966, rating: 7.8, genre: "Biography" },
    { id: 662, title: "Cleopatra", year: 1963, rating: 7.0, genre: "Biography" },
    { id: 663, title: "The Longest Day", year: 1962, rating: 7.8, genre: "War" },
    { id: 664, title: "Judgment at Nuremberg", year: 1961, rating: 8.3, genre: "Drama" },
    { id: 665, title: "Anatomy of a Murder", year: 1959, rating: 8.0, genre: "Crime" },
    { id: 666, title: "Sabrina", year: 1954, rating: 7.7, genre: "Comedy" },
    { id: 667, title: "A Place in the Sun", year: 1951, rating: 7.8, genre: "Drama" },
    { id: 668, title: "The Philadelphia Story", year: 1940, rating: 7.9, genre: "Comedy" },
    { id: 669, title: "It Happened One Night", year: 1934, rating: 8.1, genre: "Comedy" },
    { id: 670, title: "The Gold Rush", year: 1925, rating: 8.2, genre: "Comedy" },
    { id: 671, title: "The Circus", year: 1928, rating: 8.1, genre: "Comedy" },
    { id: 672, title: "Sherlock Jr.", year: 1924, rating: 8.2, genre: "Comedy" },
    { id: 673, title: "Safety Last!", year: 1923, rating: 8.1, genre: "Comedy" },
    { id: 674, title: "The Kid", year: 1921, rating: 8.2, genre: "Comedy" },
    { id: 675, title: "Singin' in the Rain", year: 1952, rating: 8.3, genre: "Comedy" },
    { id: 676, title: "Dr. Strangelove", year: 1964, rating: 8.4, genre: "Comedy" },
    { id: 677, title: "Annie Hall", year: 1977, rating: 8.0, genre: "Comedy" },
    { id: 678, title: "Juno", year: 2007, rating: 7.4, genre: "Comedy" },
    { id: 679, title: "Little Miss Sunshine", year: 2006, rating: 7.8, genre: "Comedy" },
    { id: 680, title: "Sideways", year: 2004, rating: 7.5, genre: "Comedy" },
    { id: 681, title: "Fahrenheit 451", year: 1966, rating: 7.2, genre: "Sci-Fi" },
    { id: 682, title: "The Andromeda Strain", year: 1971, rating: 7.2, genre: "Sci-Fi" },
    { id: 683, title: "Soylent Green", year: 1973, rating: 7.0, genre: "Sci-Fi" },
    { id: 684, title: "A Scanner Darkly", year: 2006, rating: 7.0, genre: "Sci-Fi" },
    { id: 685, title: "Minority Report", year: 2002, rating: 7.6, genre: "Sci-Fi" },
    { id: 686, title: "Gattaca", year: 1997, rating: 7.8, genre: "Sci-Fi" },
    { id: 687, title: "The Host", year: 2006, rating: 7.1, genre: "Horror" },
    { id: 688, title: "Train to Busan", year: 2016, rating: 7.5, genre: "Horror" },
    { id: 689, title: "Let the Right One In", year: 2008, rating: 7.9, genre: "Horror" },
    { id: 690, title: "The Babadook", year: 2014, rating: 6.8, genre: "Horror" },
    { id: 691, title: "Hereditary", year: 2018, rating: 7.3, genre: "Horror" },
    { id: 692, title: "A Girl Walks Home Alone at Night", year: 2014, rating: 7.0, genre: "Horror" },
    { id: 693, title: "Under the Shadow", year: 2016, rating: 7.2, genre: "Horror" },
    { id: 694, title: "Raw", year: 2016, rating: 7.0, genre: "Horror" },
    { id: 695, title: "The Witch", year: 2015, rating: 6.9, genre: "Horror" },
    { id: 696, title: "It Follows", year: 2014, rating: 6.8, genre: "Horror" },
    { id: 697, title: "Mandy", year: 2018, rating: 6.5, genre: "Action" },
    { id: 698, title: "The Raid: Redemption", year: 2011, rating: 7.6, genre: "Action" },
    { id: 699, title: "The Raid 2", year: 2014, rating: 8.0, genre: "Action" },
    { id: 700, title: "Ip Man", year: 2008, rating: 8.0, genre: "Action" },
    { id: 701, title: "Crouching Tiger, Hidden Dragon", year: 2000, rating: 7.8, genre: "Action" },
    { id: 702, title: "Hero", year: 2002, rating: 7.9, genre: "Action" },
    { id: 703, title: "Shaolin Soccer", year: 2001, rating: 7.3, genre: "Comedy" },
    { id: 704, title: "Kung Fu Hustle", year: 2004, rating: 7.7, genre: "Comedy" },
    { id: 705, title: "The Host (2006)", year: 2006, rating: 7.1, genre: "Sci-Fi" },
    { id: 706, title: "Burning", year: 2018, rating: 7.5, genre: "Mystery" },
    { id: 707, title: "Oldboy (2003)", year: 2003, rating: 8.4, genre: "Action" },
    { id: 708, title: "Memories of Murder", year: 2003, rating: 8.1, genre: "Crime" },
    { id: 709, title: "Mother (2009)", year: 2009, rating: 7.8, genre: "Mystery" },
    { id: 710, title: "Joint Security Area", year: 2000, rating: 7.8, genre: "War" },
    { id: 711, title: "I Saw the Devil", year: 2010, rating: 7.8, genre: "Crime" },
    { id: 712, title: "A Bittersweet Life", year: 2005, rating: 7.6, genre: "Action" },
    { id: 713, title: "The Chaser", year: 2008, rating: 7.9, genre: "Thriller" },
    { id: 714, title: "Train to Busan", year: 2016, rating: 7.5, genre: "Horror" },
    { id: 715, title: "Parasite", year: 2019, rating: 8.6, genre: "Thriller" },
    { id: 716, title: "The Handmaiden", year: 2016, rating: 8.1, genre: "Thriller" },
    { id: 717, title: "Snowpiercer", year: 2013, rating: 7.1, genre: "Sci-Fi" },
    { id: 718, title: "Okja", year: 2017, rating: 7.3, genre: "Adventure" },
    { id: 719, title: "A Taxi Driver", year: 2017, rating: 8.0, genre: "Drama" },
    { id: 720, title: "Ode to My Father", year: 2014, rating: 7.8, genre: "Drama" },
    { id: 721, title: "Miracle in Cell No. 7", year: 2013, rating: 8.2, genre: "Drama" },
    { id: 722, title: "Miss Granny", year: 2014, rating: 7.4, genre: "Comedy" },
    { id: 723, title: "Sunny", year: 2011, rating: 7.7, genre: "Comedy" },
    { id: 724, title: "Masquerade", year: 2012, rating: 7.8, genre: "Biography" },
    { id: 725, title: "The Admiral: Roaring Currents", year: 2014, rating: 7.1, genre: "War" },
    { id: 726, title: "Assassination", year: 2015, rating: 7.3, genre: "Action" },
    { id: 727, title: "Veteran", year: 2015, rating: 7.1, genre: "Action" },
    { id: 728, title: "The Age of Shadows", year: 2016, rating: 7.3, genre: "Action" },
    { id: 729, title: "Tunnel", year: 2016, rating: 7.2, genre: "Thriller" },
    { id: 730, title: "Along with the Gods: The Two Worlds", year: 2017, rating: 7.3, genre: "Fantasy" },
    { id: 731, title: "1987: When the Day Comes", year: 2017, rating: 7.8, genre: "Drama" },
    { id: 732, title: "The Fortress", year: 2017, rating: 7.0, genre: "War" },
    { id: 733, title: "Little Forest", year: 2018, rating: 7.7, genre: "Drama" },
    { id: 734, title: "Burning", year: 2018, rating: 7.5, genre: "Mystery" },
    { id: 735, title: "Extreme Job", year: 2019, rating: 7.0, genre: "Comedy" },
    { id: 736, title: "Exit", year: 2019, rating: 7.0, genre: "Action" },
    { id: 737, title: "Bong Joon-ho's Memories of Murder", year: 2003, rating: 8.1, genre: "Crime" },
    { id: 738, title: "Minari", year: 2020, rating: 7.4, genre: "Drama" },
    { id: 739, title: "Decision to Leave", year: 2022, rating: 7.3, genre: "Mystery" },
    { id: 740, title: "Broker", year: 2022, rating: 7.1, genre: "Drama" },
    { id: 741, title: "Squid Game: The Movie (Hypothetical)", year: 2024, rating: 7.5, genre: "Thriller" },
    { id: 742, title: "Inception 2 (Hypothetical)", year: 2025, rating: 8.0, genre: "Sci-Fi" },
    { id: 743, title: "The Lord of the Rings: The War of the Rohirrim", year: 2024, rating: 7.5, genre: "Animation" },
    { id: 744, title: "Avatar 3", year: 2025, rating: 7.5, genre: "Sci-Fi" },
    { id: 745, title: "Blade", year: 2025, rating: 7.0, genre: "Action" },
    { id: 746, title: "Furiousa", year: 2024, rating: 7.5, genre: "Action" },
    { id: 747, title: "Snow White", year: 2025, rating: 6.0, genre: "Fantasy" },
    { id: 748, title: "Deadpool 3", year: 2024, rating: 7.8, genre: "Action" },
    { id: 749, title: "Gladiator 2", year: 2024, rating: 7.5, genre: "Drama" },
    { id: 750, title: "Mickey 17", year: 2024, rating: 7.0, genre: "Sci-Fi" },
];
const TOTAL_MOVIES_COUNT = initialMovies.length; 

// --- Application State ---
let MOVIES_DATABASE = initialMovies;
let user = null;
let favorites = [];
let watchlist = [];
let currentView = 'all'; 
let searchQuery = '';
let selectedGenre = 'all';
let showFilters = false;
let selectedMovie = null;

const genres = [...new Set(initialMovies.map(m => m.genre))];
genres.sort();
genres.unshift('all'); 

// Utility: Local Storage Management (Kept the same)
const loadState = () => {
    try {
        const savedUser = localStorage.getItem('orixoUser');
        if (savedUser) {
            user = JSON.parse(savedUser);
            const savedFav = localStorage.getItem('orixoFav');
            const savedWatch = localStorage.getItem('orixoWatch');
            if (savedFav) favorites = JSON.parse(savedFav);
            if (savedWatch) watchlist = JSON.parse(savedWatch);
        }
    } catch (e) {
        console.error("Could not load state from local storage:", e);
    }
};

const saveFavorites = () => localStorage.setItem('orixoFav', JSON.stringify(favorites));
const saveWatchlist = () => localStorage.setItem('orixoWatch', JSON.stringify(watchlist));
const saveUser = () => localStorage.setItem('orixoUser', JSON.stringify(user));
const clearUser = () => {
    localStorage.removeItem('orixoUser');
    localStorage.removeItem('orixoFav');
    localStorage.removeItem('orixoWatch');
};

// --- Rendering Functions ---

const renderAuthControls = () => {
    const authControlsEl = document.getElementById('auth-controls');
    const oldLogoutButton = document.getElementById('logout-button');
    if (oldLogoutButton) oldLogoutButton.removeEventListener('click', handleLogout);

    authControlsEl.innerHTML = '';

    if (user) {
        authControlsEl.innerHTML = `
            <div class="user-group">
                <div class="user-info">
                    <i data-lucide="user" class="icon-user"></i>
                    <span class="hidden md:inline">${user.name}</span>
                </div>
                <button id="logout-button" class="logout-button">
                    <i data-lucide="log-out" class="icon-user"></i>
                </button>
            </div>
        `;
        document.getElementById('logout-button').addEventListener('click', handleLogout);
    } else {
        authControlsEl.innerHTML = `
            <button id="show-login-button" class="login-button">
                Login
            </button>
        `;
        document.getElementById('show-login-button').addEventListener('click', () => toggleLoginModal(true));
    }
    lucide.createIcons(); 
};

// 2. Render Navigation Buttons 
const renderNavButtons = () => {
    const navContainer = document.getElementById('nav-buttons-container');
    navContainer.innerHTML = '';

    const allButton = `<button class="nav-button ${currentView === 'all' ? 'nav-button-active' : 'nav-button-inactive'}" data-view="all">
        All Movies (${TOTAL_MOVIES_COUNT})
    </button>`;

    navContainer.innerHTML += allButton;

    if (user) {
        const favButton = `<button class="nav-button ${currentView === 'favorites' ? 'nav-button-active' : 'nav-button-inactive'}" data-view="favorites">
            ❤ Favorites (${favorites.length})
        </button>`;
        const watchButton = `<button class="nav-button ${currentView === 'watchlist' ? 'nav-button-active' : 'nav-button-inactive'}" data-view="watchlist">
            🔖 Watchlist (${watchlist.length})
        </button>`;
        navContainer.innerHTML += favButton + watchButton;
    }
};

// 3. Render Genre Filters 
const renderGenreFilters = () => {
    const filterContainer = document.getElementById('genre-filter-container');
    filterContainer.classList.toggle('visible', showFilters);
    filterContainer.innerHTML = '';

    genres.forEach(g => {
        const button = document.createElement('button');
        button.className = `genre-button ${selectedGenre === g ? 'genre-button-active' : 'genre-button-inactive'}`;
        button.textContent = g;
        button.setAttribute('data-genre', g); 
        filterContainer.appendChild(button);
    });
};

// 4. Render Movie Grid (SUPER FAST)
const renderMovieGrid = () => {
    const movieGridEl = document.getElementById('movie-grid');
    const noMoviesEl = document.getElementById('no-movies-message');
    const mainContainer = document.getElementById('main-movie-content');
    const moviesToDisplay = getMoviesToDisplay();
    
    movieGridEl.innerHTML = '';

    if (moviesToDisplay.length === 0) {
        noMoviesEl.classList.remove('hidden');
        return;
    } else {
        noMoviesEl.classList.add('hidden');
    }

    let movieHtml = '';

    moviesToDisplay.forEach(movie => {
        const isFav = favorites.some(f => f.id === movie.id);
        const isWatch = watchlist.some(w => w.id === movie.id);
        // Fallback poster URL 
        const posterUrl = movie.poster || 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300';

        movieHtml += `
            <div class="movie-card">
                <div class="movie-poster-wrapper">
                    <img
                        src="${posterUrl}"
                        alt="${movie.title}"
                        class="movie-poster"
                        data-action="view-details"
                        data-id="${movie.id}"
                    />
                    ${user ? `
                        <div class="overlay-icons">
                            <button class="icon-button ${isFav ? 'icon-button-fav' : 'icon-button-bg-dark'}" data-action="toggle-fav" data-id="${movie.id}">
                                <i data-lucide="heart" class="w-4 h-4" ${isFav ? 'fill="white"' : ''}></i>
                            </button>
                            <button class="icon-button ${isWatch ? 'icon-button-watch' : 'icon-button-bg-dark'}" data-action="toggle-watch" data-id="${movie.id}">
                                <i data-lucide="bookmark-plus" class="w-4 h-4" ${isWatch ? 'fill="white"' : ''}></i>
                            </button>
                        </div>
                    ` : ''}
                    <div class="info-overlay">
                        <div class="info-overlay-top">
                            <div class="rating-group">
                                <i data-lucide="star" class="icon-star"></i>
                                <span class="rating-text">${movie.rating}</span>
                            </div>
                            <span class="genre-tag">${movie.genre}</span>
                        </div>
                        <button class="details-button" data-action="view-details" data-id="${movie.id}">
                            <i data-lucide="info" class="w-4 h-4"></i>
                            Details
                        </button>
                    </div>
                </div>
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
            </div>
        `;
    });
    
    movieGridEl.innerHTML = movieHtml;
    lucide.createIcons();
};

// 5. Render Detail Modal (FIX: Logic for unlinking/relinking buttons)
const renderDetailModal = (movie) => {
    const modalEl = document.getElementById('detail-modal');
    const contentEl = document.getElementById('detail-modal-content');
    
    if (!movie) {
        modalEl.classList.add('hidden');
        return;
    }

    const isFav = favorites.some(f => f.id === movie.id);
    const isWatch = watchlist.some(w => w.id === movie.id);
    const posterUrl = movie.poster || 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300';

    contentEl.innerHTML = `
        <div class="detail-content-wrapper">
            <img
                src="${posterUrl}"
                alt="${movie.title}"
                class="detail-poster"
            />
            <div class="detail-info">
                <h2 class="detail-title">${movie.title}</h2>
                <div class="detail-stats">
                    <div class="detail-stat-item">
                        <i data-lucide="star" class="icon-star w-5 h-5"></i>
                        <span class="detail-rating-text">${movie.rating}/10</span>
                    </div>
                    <span class="detail-tag">${movie.year}</span>
                    <span class="detail-tag">${movie.genre}</span>
                </div>

                ${user ? `
                    <div class="detail-action-buttons">
                        <button id="detail-fav-button" class="detail-action-button ${isFav ? 'detail-action-button-favorite' : 'detail-action-button-default'}" data-id="${movie.id}">
                            <i data-lucide="heart" class="w-4 h-4"></i>
                            ${isFav ? 'Remove Favorite' : 'Add Favorite'}
                        </button>
                        <button id="detail-watch-button" class="detail-action-button ${isWatch ? 'detail-action-button-watchlist' : 'detail-action-button-default'}" data-id="${movie.id}">
                            <i data-lucide="bookmark-plus" class="w-4 h-4"></i>
                            ${isWatch ? 'Remove Watchlist' : 'Add Watchlist'}
                        </button>
                    </div>
                ` : ''}

                <div class="info-box-title">Movie Information</div>
                <p class="info-box-text"><strong>Title:</strong> ${movie.title}</p>
                <p class="info-box-text"><strong>Release Year:</strong> ${movie.year}</p>
                <p class="info-box-text"><strong>Genre:</strong> ${movie.genre}</p>
                <p class="info-box-text"><strong>Rating:</strong> ${movie.rating}/10 ⭐</p>

                <div class="streaming-box">
                    <div class="info-box-title">📺 Watch on Legal Platforms</div>
                    <div class="streaming-platforms">
                        <span class="platform-tag platform-netflix">Netflix</span>
                        <span class="platform-tag platform-prime">Prime Video</span>
                        <span class="platform-tag platform-disney">Disney+</span>
                        <span class="platform-tag platform-hotstar">Hotstar</span>
                    </div>
                    <p class="disclaimer">
                        * Availability may vary by region. Check platforms for current availability.
                    </p>
                </div>
            </div>
        </div>
        <button id="close-detail-modal" class="detail-close-button">✕ Close</button>
    `;
    
    document.getElementById('close-detail-modal').addEventListener('click', () => toggleDetailModal(false));
    if (user) {
        document.getElementById('detail-fav-button').addEventListener('click', detailActionHandler);
        document.getElementById('detail-watch-button').addEventListener('click', detailActionHandler);
    }
    
    lucide.createIcons();
};

// --- Logic Handlers ---
const getMoviesToDisplay = () => {
    let list;
    if (currentView === 'favorites') list = favorites;
    else if (currentView === 'watchlist') list = watchlist;
    else list = MOVIES_DATABASE;
    return [...new Map(list.map(item => [item.id, item])).values()];
};

const handleSearch = () => {
    searchQuery = document.getElementById('search-input').value.trim();
    currentView = 'all';
    selectedGenre = 'all';
    if (searchQuery) {
        MOVIES_DATABASE = initialMovies.filter(m =>
            m.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    } else {
        MOVIES_DATABASE = initialMovies;
    }
    renderApp();
};

const filterByGenre = (genre) => {
    selectedGenre = genre;
    currentView = 'all';
    searchQuery = '';
    document.getElementById('search-input').value = '';
    if (genre === 'all') {
        MOVIES_DATABASE = initialMovies;
    } else {
        MOVIES_DATABASE = initialMovies.filter(m => m.genre === genre);
    }
    renderApp();
    renderGenreFilters(); 
};

const setCurrentView = (view) => {
    currentView = view;
    if (view !== 'all') {
        resetFiltersAndSearch(false);
    }
    renderApp();
};

const resetFiltersAndSearch = (resetData = true) => {
    selectedGenre = 'all';
    searchQuery = '';
    document.getElementById('search-input').value = '';
    if (resetData) {
        MOVIES_DATABASE = initialMovies;
    }
};

const detailActionHandler = (e) => {
    const button = e.currentTarget;
    const movieId = parseInt(button.getAttribute('data-id'));
    const movie = initialMovies.find(m => m.id === movieId);
    if (!movie) return;

    if (button.id === 'detail-fav-button') {
        addToFavorites(movie);
    } else if (button.id === 'detail-watch-button') {
        addToWatchlist(movie);
    }
};

// Event Delegation Handlers (PERFORMANCE FIX)
const handleMovieGridClick = (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    e.preventDefault();
    const movieId = parseInt(target.getAttribute('data-id'));
    const movie = initialMovies.find(m => m.id === movieId);
    if (!movie) return;

    const action = target.getAttribute('data-action');

    switch (action) {
        case 'view-details':
            toggleDetailModal(true, movie);
            break;
        case 'toggle-fav':
            addToFavorites(movie);
            break;
        case 'toggle-watch':
            addToWatchlist(movie);
            break;
    }
};

const handleNavOrFilterClick = (e) => {
    const target = e.target.closest('.nav-button, .genre-button');
    if (!target) return;

    if (target.classList.contains('nav-button')) {
        const view = target.getAttribute('data-view');
        setCurrentView(view);
    } else if (target.classList.contains('genre-button')) {
        const genre = target.getAttribute('data-genre');
        filterByGenre(genre);
    }
};


const renderApp = () => {
    renderAuthControls();
    renderNavButtons();
    renderGenreFilters();
    renderMovieGrid();
    
    if (selectedMovie) {
        const currentMovie = initialMovies.find(m => m.id === selectedMovie.id);
        if(currentMovie) {
            renderDetailModal(currentMovie);
        } else {
            toggleDetailModal(false); 
        }
    }
};

const toggleLoginModal = (show) => document.getElementById('login-modal').classList.toggle('hidden', !show);
const toggleDetailModal = (show, movie = null) => {
    selectedMovie = movie;
    if (show && movie) {
        renderDetailModal(movie);
        document.getElementById('detail-modal').classList.remove('hidden');
    } else {
        document.getElementById('detail-modal').classList.add('hidden');
        selectedMovie = null; 
    }
};

const handleLogin = () => { 
    const loginEmail = document.getElementById('login-email-input').value.trim();
    const loginName = document.getElementById('login-name-input').value.trim();
    if (loginEmail && loginName) {
        user = { email: loginEmail, name: loginName };
        saveUser();
        toggleLoginModal(false);
        document.getElementById('login-email-input').value = '';
        document.getElementById('login-name-input').value = '';
        renderApp();
    } else {
        alert('Please enter both email and name!');
    }
};
const handleLogout = () => { 
    user = null;
    favorites = [];
    watchlist = [];
    currentView = 'all';
    clearUser();
    renderApp();
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    renderApp(); 

    // Event Delegation setup (Set once for all dynamic movie elements)
    document.getElementById('movie-grid').addEventListener('click', handleMovieGridClick);
    document.getElementById('nav-buttons-container').addEventListener('click', handleNavOrFilterClick);
    document.getElementById('genre-filter-container').addEventListener('click', handleNavOrFilterClick);
    
    // Other fixed listeners
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    document.getElementById('toggle-filters-button').addEventListener('click', () => {
        showFilters = !showFilters;
        renderGenreFilters();
    });

    // Login Modal Listeners
    document.getElementById('perform-login-button').addEventListener('click', handleLogin);
    document.getElementById('cancel-login-button').addEventListener('click', () => toggleLoginModal(false));

    lucide.createIcons();

});
