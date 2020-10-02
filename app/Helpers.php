<?php



function formatDateFrench ($date, $comma = ",")
{
return ucfirst(\Carbon\Carbon::parse($date)->formatLocalized('%A %d' . $comma . ' %B %Y'));
}
