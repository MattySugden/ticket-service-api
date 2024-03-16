const user = require('./user'); // Replace with path to your user.js file

// Mock any external dependencies (e.g., database)
jest.mock('./database'); // Assuming user.js interacts with a database module

describe('getUserById', () => {
  test('should return user object for a valid ID', () => {
    // Arrange
    const userId = 123;
    const userObj = { id: userId, name: 'John' };
    
    // Mock database call to return the user object
    database.getUserById.mockReturnValue(userObj);

    // Act
    const result = user.getUserById(userId);

    // Assert
    expect(result).toEqual(userObj);
  });

  test('should throw error for non-existent user', () => {
    // Arrange
    const userId = 999;
    
    // Mock database call to return null (user not found)
    database.getUserById.mockReturnValue(null);

    // Act & Assert (using expect.toThrow)
    expect(() => user.getUserById(userId)).toThrow('User not found');
  });
});