﻿using System.Web.Mvc;

namespace Orix.MeuControle.UI.Web.Controllers
{
    public class PrincipalController : Controller
    {
        // GET: Principal
        public ActionResult Index()
        {
            return Redirect("ControleMapas/Home");
        }
    }
}