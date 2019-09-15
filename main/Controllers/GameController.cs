using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace main.Controllers
{ 
    /// <summary>
    /// Creates a new game instance for 1 human player and 1 mpc player
    /// </summary>
    public class GameController : Controller
    {
        /// <summary>
        /// Creates a new game for the user where they play against a NPC player
        /// or adds the user to existing game with a NPC player. 
        /// The NPC player is replaced with the user.
        /// </summary>
        /// <returns>
        /// Returns a location header with the URI of the game
        /// </returns>
        public void JoinGame()
        {
            Response.Headers.Add("Location", "A uri");
        }
    }
}
