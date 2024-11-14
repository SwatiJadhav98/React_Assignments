$(document).ready(function () {
    let currentPage = 1;
    const itemsPerPage = 5; // Number of items to load per request
    const contentList = $('#content-list');
    const loadMoreButton = $('#load-more-btn');

    // Mock data to simulate the API response
    const mockData = [
        { title: 'List  1' },
        { title: 'List  2' },
        { title: 'List  3' },
        { title: 'List  4' },
        { title: 'List  5' },
        { title: 'Note  1' },
        { title: 'Note  2' },
        { title: 'Note  3' },
        { title: 'Note  4' },
        { title: 'Note  5' },
        { title: 'Demo  1' },
        { title: 'Demo  2' },
        { title: 'Demo  3' },
        { title: 'Demo  4' },
        { title: 'Demo  5' }
    ];

    // Function to load content from the mock data and append to the list
    function loadMoreContent(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const data = mockData.slice(startIndex, endIndex);

        if (data.length > 0) {
            // Append each item to the list
            data.forEach(item => {
                contentList.append(`<li>${item.title}</li>`);
            });

            loadMoreButton.text('Load More');
            loadMoreButton.prop('disabled', false);

            // Hide the "Load More" button if no more data is available
            if (endIndex >= mockData.length) {
                loadMoreButton.text('No more content to load');
                loadMoreButton.prop('disabled', true);
            }
        } else {
            // Custom message for no more content
            loadMoreButton.text('No more content to load');
            loadMoreButton.prop('disabled', true);
        }
    }

    // Initial content load
    loadMoreContent(currentPage);

    // Event listener for the "Load More" button
    loadMoreButton.on('click', function () {
        currentPage++; // Increment page number
        loadMoreContent(currentPage); // Load the next page
    });
});
