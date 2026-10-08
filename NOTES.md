# Notes

## Summary of Changes

* Fixed the status filter SQL query by grouping the title/description conditions so the selected status is applied correctly.
* Fixed the frontend loading state by using `async/await` with `try/catch/finally`, ensuring loading is reset when requests fail.
* Added validation for invalid `page` and `pageSize` values to return `400 Bad Request` instead of causing errors.
* Handled invalid status values and return `400 Bad Request` instead of `500 Internal Server Error`.
* Removed the unnecessary `Thread.sleep()` delay from task search.
* Reset pagination to page 1 when the search query or status filter changes.
* Corrected the status spelling in the status filter to match the backend status values.
## What I Chose Not to Change

I did not modify the Oracle PL/SQL reference artifact because it is explicitly reference-only and is not used by the local H2 application. I also did not rewrite the existing pagination implementation because the current dataset is small and the change would increase the scope of the patch.

## Biggest Remaining Risk

Pagination is currently performed in memory after fetching all matching tasks. This is acceptable for the current small dataset, but could become inefficient as the number of tasks grows.

## Tools / AI Used

I used browser/API testing, the browser Network tab, backend logs, and code inspection to reproduce and investigate the issues. I used ChatGPT to help understand the code, SQL behavior, and possible fixes. I verified the suggested fixes myself through local testing before applying them.
