﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DotaEye.Controllers
{
    public class MobileController : Controller
    {
        // GET: Mobile
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }
    }
}