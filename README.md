# Placement EHub web platform

# Instructions

### `npm install` hangs on still: `idealTree build`
On Ubuntu 22.10, disabling IPv6 fixes the problem.

The temporary solution is as follows, and it needs to be done everytime the machine is restarted.
```bash
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
```

To change this permanently, edit the `/etc/default/grub` where it says:
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```
to the following value property
```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash ipv6.disable=1"
```
The final touch is to update the grub with the following commnad
```bash
sudo update-grub
```
